<template>
  <ion-app>
    <ion-content class="playground-content">
      <div class="playground-shell">
        <header class="site-header">
          <div class="brand-mark" aria-hidden="true">SF</div>
          <div class="brand-copy">
            <span class="eyebrow">Vue Ionic Standard Form</span>
            <h1>Form playground</h1>
            <p>Explore the package with real controls and inspect the values they produce.</p>
          </div>
          <a class="docs-link" href="https://github.com/petroskayange/vue-ionic-standard-form#readme" target="_blank" rel="noopener noreferrer">Read docs <span aria-hidden="true">↗</span></a>
        </header>

        <main class="workspace">
          <aside class="preset-panel panel" aria-label="Example forms">
            <div class="panel-heading">
              <span class="panel-kicker">01 / Explore</span>
              <h2>Example forms</h2>
              <p>Choose a set of controls to try.</p>
            </div>
            <div class="preset-list">
              <button
                v-for="preset in presets"
                :key="preset.id"
                type="button"
                class="preset-button"
                :class="{ active: preset.id === selectedPresetId }"
                :aria-pressed="preset.id === selectedPresetId"
                @click="selectPreset(preset.id)"
              >
                <span class="preset-name">{{ preset.title }}</span>
                <span class="preset-description">{{ preset.description }}</span>
              </button>
            </div>
            <div class="local-note">
              <strong>In your browser</strong>
              <span>Form values stay in this browser. Nothing is submitted to MaHIS.</span>
            </div>
          </aside>

          <section class="preview-panel panel" aria-label="Form preview">
            <div class="panel-heading preview-heading">
              <div>
                <span class="panel-kicker">02 / Interact</span>
                <h2>{{ activePreset?.title || "Custom form" }}</h2>
                <p>{{ activePreset?.description || "Your edited schema is shown below." }}</p>
              </div>
              <span class="field-count">{{ appliedFields.length }} fields</span>
            </div>

            <div class="form-frame">
              <StandardForm
                :key="formKey"
                ref="formRef"
                :form-data="appliedFields"
                @update:form-values="handleValues"
                @ready="refreshValues"
              >
                <template #playgroundCounter="{ formValues, updateValue }">
                  <div class="slot-demo">
                    <span class="slot-label">Custom slot counter</span>
                    <span class="slot-help">A named slot can own an app-specific control.</span>
                    <button type="button" class="slot-button" @click="updateValue('demoCounter', Number(formValues.demoCounter || 0) + 1)">
                      Add one <span class="counter-value">{{ formValues.demoCounter || 0 }}</span>
                    </button>
                  </div>
                </template>
                <template #facilitySelectorField="{ formValues, updateValue }">
                  <label class="slot-demo">
                    <span class="slot-label">Receiving facility</span>
                    <span class="slot-help">Example of the MaHIS facility selector slot.</span>
                    <select :value="formValues.transferFacility || ''" @change="updateValue('transferFacility', eventValue($event))">
                      <option value="">Select a facility</option>
                      <option value="Queen Elizabeth Central Hospital">Queen Elizabeth Central Hospital</option>
                      <option value="Kamuzu Central Hospital">Kamuzu Central Hospital</option>
                      <option value="Zomba Central Hospital">Zomba Central Hospital</option>
                    </select>
                  </label>
                </template>
                <template #drugPrescriptionField="{ formValues, updateValue }">
                  <label class="slot-demo">
                    <span class="slot-label">Prescriptions</span>
                    <span class="slot-help">Example of the MaHIS prescription slot. Separate names with commas.</span>
                    <input
                      type="text"
                      placeholder="e.g. paracetamol, amoxicillin"
                      :value="Array.isArray(formValues.prescriptions) ? formValues.prescriptions.join(', ') : ''"
                      @input="updateValue('prescriptions', splitList(eventValue($event)))"
                    />
                  </label>
                </template>
              </StandardForm>
            </div>

            <div class="form-actions">
              <button type="button" class="primary-button" @click="collectValues">Validate & collect values</button>
              <button type="button" class="secondary-button" @click="resetValues">Reset form</button>
              <span class="action-status" role="status">{{ status }}</span>
            </div>
          </section>

          <aside class="inspector-panel panel" aria-label="Form inspector">
            <div class="panel-heading">
              <span class="panel-kicker">03 / Inspect</span>
              <h2>Values & schema</h2>
              <p>See what the form emits and edit its JSON configuration.</p>
            </div>
            <div class="inspector-section">
              <div class="inspector-title"><h3>Live values</h3><span>All fields</span></div>
              <pre>{{ formatJson(liveValues) }}</pre>
            </div>
            <div class="inspector-section">
              <div class="inspector-title"><h3>getFormValues()</h3><span>Visible answers</span></div>
              <pre>{{ formatJson(collectedValues) }}</pre>
            </div>
            <div v-if="validationErrors" class="inspector-section error-section">
              <div class="inspector-title"><h3>Validation errors</h3></div>
              <pre>{{ formatJson(validationErrors) }}</pre>
            </div>
            <div class="editor-section">
              <div class="inspector-title"><h3>Form schema</h3><span>JSON</span></div>
              <p class="editor-hint">Edit a field, then apply. JSON cannot contain JavaScript callbacks such as <code>condition</code> and <code>validation</code>; applying the editor removes those callbacks from a preset.</p>
              <textarea v-model="schemaText" spellcheck="false" aria-label="Form schema JSON" />
              <p v-if="schemaError" class="schema-error" role="alert">{{ schemaError }}</p>
              <div class="editor-actions">
                <button type="button" class="primary-button" @click="applySchema">Apply schema</button>
                <button type="button" class="text-button" @click="restorePreset">Restore example</button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { IonApp, IonContent } from "@ionic/vue";
import StandardForm from "../src/components/StandardForm.vue";
import type { FormElement } from "../src/interfaces/FormElement";
import { presets } from "./presets";

const selectedPresetId = ref(presets[0].id);
const activePreset = computed(() => presets.find(preset => preset.id === selectedPresetId.value));
const appliedFields = ref<FormElement[]>(cloneFields(presets[0].fields));
const schemaText = ref(JSON.stringify(presets[0].fields, null, 2));
const schemaError = ref("");
const formKey = ref(0);
const formRef = ref<InstanceType<typeof StandardForm> | null>(null);
const liveValues = ref<Record<string, unknown>>({});
const collectedValues = ref<Record<string, unknown>>({});
const validationErrors = ref<Record<string, string> | null>(null);
const status = ref("Change a field to see its value.");

function cloneConfig<T>(value: T): T {
  if (Array.isArray(value)) return value.map(item => cloneConfig(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cloneConfig(item)])) as T;
  }
  return value;
}

function cloneFields(fields: FormElement[]): FormElement[] {
  return cloneConfig(fields);
}

function formatJson(value: unknown): string {
  return JSON.stringify(value, null, 2) || "{}";
}

function eventValue(event: Event): string {
  return (event.target as HTMLInputElement | HTMLSelectElement).value;
}

function splitList(value: string): string[] {
  return value.split(",").map(item => item.trim()).filter(Boolean);
}

function loadFields(fields: FormElement[]): void {
  appliedFields.value = cloneFields(fields);
  formKey.value += 1;
  liveValues.value = {};
  collectedValues.value = {};
  validationErrors.value = null;
  schemaError.value = "";
  status.value = "Form loaded. Try a control.";
}

function selectPreset(id: string): void {
  const preset = presets.find(item => item.id === id);
  if (!preset) return;
  selectedPresetId.value = id;
  schemaText.value = JSON.stringify(preset.fields, null, 2);
  loadFields(preset.fields);
}

function restorePreset(): void {
  selectPreset(selectedPresetId.value);
}

function applySchema(): void {
  try {
    const parsed: unknown = JSON.parse(schemaText.value);
    if (!Array.isArray(parsed) || parsed.some(item => !item || typeof item !== "object" || typeof item.componentType !== "string")) {
      throw new Error("Use an array of fields, each with a componentType string.");
    }
    loadFields(parsed as FormElement[]);
    status.value = "Edited schema applied.";
  } catch (error) {
    schemaError.value = error instanceof Error ? error.message : "Invalid JSON schema.";
  }
}

async function refreshValues(): Promise<void> {
  await nextTick();
  collectedValues.value = formRef.value?.getFormValues() || {};
}

function handleValues(values: Record<string, unknown>): void {
  liveValues.value = { ...values };
  void refreshValues();
}

async function collectValues(): Promise<void> {
  validationErrors.value = formRef.value?.validateForm() || null;
  await refreshValues();
  if (validationErrors.value) {
    status.value = "Validation found fields to review.";
    await formRef.value?.scrollToFirstError(validationErrors.value);
  } else {
    status.value = "Values collected. Inspect the result on the right.";
  }
}

async function resetValues(): Promise<void> {
  await formRef.value?.resetForm();
  liveValues.value = { ...(formRef.value?.formValues || {}) };
  validationErrors.value = null;
  await refreshValues();
  status.value = "Form reset.";
}
</script>
