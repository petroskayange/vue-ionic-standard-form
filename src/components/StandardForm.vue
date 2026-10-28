<template>
  <div ref="rootEl" class="standard-form-wrapper">
    <div v-if="subtitle" class="section-subtitle">{{ subtitle }}</div>
    <div v-if="hasRestoredDraft" class="draft-restored-notice">
      Unsaved entries from your last attempt were restored. Please check them, then save.
    </div>
    <ion-grid class="standard-form-grid">
      <template v-for="(group, groupIndex) in formGroups" :key="groupIndex">
        <ion-row :class="['standard-form-row', { 'standard-form-section-row': group.section?.mode === 'neonatal' }]">
          <ion-col v-if="group.section?.title" size="12" class="section-heading-col">
            <div class="form-section-heading">{{ group.section.title }}</div>
            <p v-if="group.section.description" class="form-section-description">{{ group.section.description }}</p>
          </ion-col>
          <ion-col
            v-for="field in group.fields"
            :key="field.name || field.header || field.__originalIndex"
            :data-field-name="field.name || field.header"
            :class="{ 'no-padding': field.noPadding, 'no-margin': field.noMargin, 'zero-height': !field.componentType || !shouldShowField(field) }"
            :size="field.grid?.s || '12'"
            :size-xs="field.grid?.xs"
            :size-sm="field.grid?.sm"
            :size-md="field.grid?.md"
            :size-lg="field.grid?.lg"
            :size-xl="field.grid?.xl"
            :offset="field.offset"
          >
            <template v-if="shouldShowField(field)">
              <div v-if="field.componentType === 'Slot' || (field.componentType !== 'Dashes' && !components[field.componentType || ''])">
                <slot
                  :name="field.slotName || field.componentType || 'default'"
                  :config="field"
                  :formValues="formValuesState"
                  :updateValue="(name: string, value: unknown) => updateSlotValue(name, value, field)"
                />
              </div>
              <div v-else-if="field.componentType === 'textAreaField' && enableVoice && field.voice !== false && $slots.voiceTextArea">
                <slot
                  name="voiceTextArea"
                  :config="field"
                  :formValues="formValuesState"
                  :updateValue="(name: string, value: unknown) => updateSlotValue(name, value, field)"
                />
              </div>
              <YesNoQuestion
                v-else-if="field.componentType === 'yesNoQuestion'"
                :question="String(field.header || field.question || '')"
                :modelValue="formValuesState[field.name || '']"
                :groupId="field.name"
                @update:modelValue="(value) => handleYesNoChange(field, value)"
              />
              <div v-else-if="field.componentType === 'Dashes' && shouldShowDashes(field.__originalIndex)">
                <div class="dashed_bottom_border dashed" />
              </div>
              <component
                :is="components[field.componentType || '']"
                v-else-if="field.componentType !== 'Dashes'"
                :config="field"
                :allFormValues="formValuesState"
                :mode="formMode"
                :modelValue="formValuesState[field.name || '']"
                @field-changed="handleFieldChange"
                :ref="(el: any) => setFieldRef(el, field)"
              />
            </template>
          </ion-col>
        </ion-row>
      </template>
    </ion-grid>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import Heading from "./Heading.vue";
import InputField from "./InputField.vue";
import TextAreaField from "./TextAreaField.vue";
import MultiSelectInput from "./MultiSelectInput.vue";
import CheckboxField from "./CheckboxField.vue";
import RadioButtonField from "./RadioButtonField.vue";
import DateInputField from "./DateInputField.vue";
import DateTimeInputField from "./DateTimeInputField.vue";
import TimeInputField from "./TimeInputField.vue";
import PhoneInputField from "./PhoneInputField.vue";
import Alert from "./Alert.vue";
import Banner from "./Banner.vue";
import SwitchField from "./SwitchField.vue";
import SearchableDropdown from "./SearchableDropdown.vue";
import ListSelectionField from "./ListSelectionField.vue";
import SummaryField from "./SummaryField.vue";
import ScoreField from "./ScoreField.vue";
import IllustrationField from "./IllustrationField.vue";
import InfographicDisplay from "./InfographicDisplay.vue";
import YesNoQuestion from "./YesNoQuestion.vue";
import type { FormElement } from "../interfaces/FormElement";
import type { FormSectionInfo } from "../interfaces/FormSectionInfo";
import type { ConditionalRule } from "../interfaces/conditions";
import { useConditionalActions } from "../utils/conditionalExpressions";
import { clearFormDraft, draftableValues, isEmptyValue, readFormDraft, writeFormDraft } from "../utils/formDraft";

// App-specific controls can be supplied through named slots.
const components: Record<string, any> = {
  Heading, inputField: InputField, textAreaField: TextAreaField,
  multiSelectInputField: MultiSelectInput, checkboxField: CheckboxField,
  radioButtonField: RadioButtonField, dateInputField: DateInputField,
  dateTimeInputField: DateTimeInputField, timeInputField: TimeInputField,
  phoneInputField: PhoneInputField, Alert, Banner, switchField: SwitchField,
  searchableDropdown: SearchableDropdown, listSelectionField: ListSelectionField,
  summaryField: SummaryField, scoreField: ScoreField,
  illustration: IllustrationField, infographicField: InfographicDisplay,
  yesNoQuestion: YesNoQuestion,
  Dashes: null,
};

type Field = FormElement & { __originalIndex: number; [key: string]: any };
interface Group { section?: FormSectionInfo; fields: Field[] }
const props = defineProps<{
  formData: FormElement[];
  conditionalRules?: ConditionalRule[];
  subtitle?: string;
  allFormValues?: Record<string, any>;
  initialData?: Record<string, any>;
  draftKey?: string;
  enableVoice?: boolean;
}>();
const emit = defineEmits(["update:modelValue", "update:form-values", "field-changed", "ready"]);
const formMode = inject("formMode", "default");
const formValuesState = reactive<Record<string, any>>({});
const formValues = computed(() => ({ ...formValuesState }));
const fieldRefs = new Map<string, any>();
const rootEl = ref<HTMLElement | null>(null);
const hasRestoredDraft = ref(false);
const isDraftCleared = ref(false);
const isResetting = ref(false);
const hiddenFields = ref(new Set<string>());
const { applyConditionalRules } = useConditionalActions();
const metadataKeys = new Set(["obsValueType", "obsParentConcept", "obsBodyPartPrefix"]);
let draftWriteTimeout: ReturnType<typeof setTimeout> | null = null;

const formGroups = computed<Group[]>(() => {
  const groups: Group[] = [];
  props.formData.forEach((item, index) => {
    const field = { ...item, __originalIndex: index } as Field;
    const section = field.section;
    const last = groups[groups.length - 1];
    if (last && last.section?.id === section?.id && (last.section || !section)) last.fields.push(field);
    else groups.push({ section, fields: [field] });
  });
  return groups;
});

function shouldShowField(field: FormElement): boolean {
  const name = field.name || field.header;
  if (name && hiddenFields.value.has(name)) return false;
  if (!field.condition) return true;
  try { return Boolean(field.condition(formValuesState)); }
  catch (error) { console.warn("Condition function error for field:", name, error); return false; }
}

function shouldShowDashes(index: number): boolean {
  const adjacent = [props.formData[index - 1], props.formData[index + 1]];
  return adjacent.some(field => field && field.componentType !== "Dashes" && shouldShowField(field));
}

function setFieldRef(el: any, field: FormElement): void {
  const name = field.name || field.header;
  if (!name) return;
  if (el) fieldRefs.set(name, el);
  else fieldRefs.delete(name);
}

function syncFieldRefs(): void {
  fieldRefs.forEach((fieldRef, name) => {
    if (Object.prototype.hasOwnProperty.call(formValuesState, name)) fieldRef?.setValue?.(formValuesState[name]);
  });
}

function applyUpdates(updates: unknown): void {
  if (!updates || typeof updates !== "object" || Array.isArray(updates)) return;
  Object.entries(updates).forEach(([name, value]) => {
    if (!Object.is(formValuesState[name], value)) setFormValue(name, value);
  });
}

function setFormValue(name: string, value: any): void {
  formValuesState[name] = value;
  fieldRefs.get(name)?.setValue?.(value);
}

function handleFieldChange(event: { fieldName: string; value: any; config: FormElement }): void {
  formValuesState[event.fieldName] = event.value;
  isDraftCleared.value = false;
  if (event.config.onChange) applyUpdates(event.config.onChange(event.value, { ...formValuesState }));
  emit("field-changed", { fieldName: event.fieldName, value: event.value, allValues: { ...formValuesState } });
}

function updateSlotValue(name: string, value: any, config: FormElement): void {
  formValuesState[name] = value;
  isDraftCleared.value = false;
  if (config.onChange) applyUpdates(config.onChange(value, { ...formValuesState }));
  emit("field-changed", { fieldName: name, value, allValues: { ...formValuesState } });
}

function handleYesNoChange(config: FormElement, value: boolean | null): void {
  if (!config.name) return;
  updateSlotValue(config.name, value === null ? "" : value ? "Yes" : "No", config);
}

function initializeValues(): void {
  props.formData.forEach(field => {
    const name = field.name || field.header;
    if (!name) return;
    for (const key of metadataKeys) {
      const meta = (field as any)[key];
      if (meta !== undefined) (formValuesState[key] ??= {})[name] = meta;
    }
    const value = field.value ?? field.initialValue;
    if (value !== undefined && value !== null && value !== "") formValuesState[name] = value;
  });
  Object.assign(formValuesState, props.initialData, props.allFormValues);
  if (props.draftKey) {
    const draft = readFormDraft(props.draftKey);
    if (draft) Object.entries(draft).forEach(([name, value]) => {
      if (isEmptyValue(formValuesState[name])) { formValuesState[name] = value; hasRestoredDraft.value = true; }
    });
  }
}

watch(() => props.allFormValues, values => {
  if (!values || isResetting.value) return;
  Object.entries(values).forEach(([name, value]) => { if (formValuesState[name] !== value) setFormValue(name, value); });
}, { deep: true, immediate: true });

watch(() => ({ ...formValuesState }), values => {
  emit("update:modelValue", values);
  emit("update:form-values", values);
  if (props.conditionalRules?.length) {
    const result = applyConditionalRules(props.conditionalRules, values);
    hiddenFields.value = result.hiddenFields;
    applyUpdates(result.autoSetValues);
  } else hiddenFields.value = new Set();
  props.formData.forEach(field => {
    const name = field.name || field.header;
    if (name && field.componentType !== "Slot" && !shouldShowField(field) && !isEmptyValue(formValuesState[name])) setFormValue(name, "");
  });
  if (props.draftKey && !isResetting.value && !isDraftCleared.value) {
    if (draftWriteTimeout) clearTimeout(draftWriteTimeout);
    draftWriteTimeout = setTimeout(() => writeFormDraft(props.draftKey!, draftableValues(values)), 500);
  }
}, { deep: true, immediate: true });

onMounted(async () => { initializeValues(); await nextTick(); syncFieldRefs(); emit("ready", fieldRefs); });
onBeforeUnmount(() => {
  if (draftWriteTimeout) clearTimeout(draftWriteTimeout);
  if (props.draftKey && !isResetting.value && !isDraftCleared.value) writeFormDraft(props.draftKey, draftableValues(formValuesState));
});

function getFormValues(): Record<string, any> {
  const result: Record<string, any> = {};
  Object.entries(formValuesState).forEach(([name, value]) => {
    if (metadataKeys.has(name) || (!isEmptyValue(value) && !hiddenFields.value.has(name) &&
      shouldShowField(props.formData.find(field => (field.name || field.header) === name) || { componentType: "Slot" }))) result[name] = value;
  });
  return result;
}

async function resetForm(excludeFields?: string | string[]): Promise<void> {
  isResetting.value = true;
  const excluded = new Set(typeof excludeFields === "string" ? [excludeFields] : excludeFields || []);
  Object.keys(formValuesState).forEach(name => { if (!metadataKeys.has(name) && !excluded.has(name)) formValuesState[name] = ""; });
  await nextTick();
  fieldRefs.forEach((fieldRef, name) => {
    if (excluded.has(name)) return;
    fieldRef?.resetTouched?.(); fieldRef?.setValue?.(""); fieldRef?.setUnit?.(null);
  });
  await nextTick(); isResetting.value = false;
}

function validateForm(): Record<string, string> | null {
  const errors: Record<string, string> = {};
  fieldRefs.forEach((fieldRef, name) => {
    const field = props.formData.find(item => (item.name || item.header) === name);
    if (!field || !shouldShowField(field)) return;
    const error = fieldRef?.validate?.();
    if (error) errors[name] = String(error);
  });
  return Object.keys(errors).length ? errors : null;
}

async function scrollFieldIntoView(name: string): Promise<void> {
  await nextTick();
  const field = Array.from(rootEl.value?.querySelectorAll<HTMLElement>("[data-field-name]") || [])
    .find(el => el.dataset.fieldName === name);
  field?.scrollIntoView({ behavior: "smooth", block: "center" });
}

async function scrollToFirstError(errors: Record<string, string> | null | undefined): Promise<void> {
  const name = errors && Object.keys(errors).find(key => !key.startsWith("_"));
  if (name) await scrollFieldIntoView(name);
}

defineExpose({
  getFormValues, formValues, setFormValue, resetForm, validateForm, scrollFieldIntoView, scrollToFirstError,
  clearDraft: () => { if (draftWriteTimeout) clearTimeout(draftWriteTimeout); hasRestoredDraft.value = false;
    isDraftCleared.value = true; if (props.draftKey) clearFormDraft(props.draftKey); },
});
</script>

<style scoped>
.standard-form-wrapper { display: flex; flex-direction: column; width: 100%; }
.standard-form-grid { --ion-grid-padding: 0; width: 100%; }
.standard-form-row { padding: 0; }
.section-subtitle { padding: 10px; background: #fedf89; font-weight: 500; }
.draft-restored-notice { color: #0c4a6e; background: #e0f2fe; border: 1px solid #0ea5e9; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; }
.form-section-heading { font-weight: 600; color: #636363; }
.form-section-description { margin: 4px 0 0; color: #6b7280; }
.standard-form-section-row { background: white; border-radius: 8px; padding: 16px; box-shadow: 20px 20px 20px rgba(15,23,42,.05); }
.no-margin > * { margin-bottom: 0 !important; }
.no-padding > * { padding: 0 !important; }
.zero-height { display: none; }
.dashed { margin-bottom: 15px; }
</style>
