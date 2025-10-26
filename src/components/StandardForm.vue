<template>
  <ion-grid>
    <ion-row>
      <ion-col
        v-for="(formCol, colIndex) in formData"
        :key="colIndex"
        :size="formCol?.grid?.s || '12'"
        :size-xs="formCol?.grid?.xs"
        :size-sm="formCol?.grid?.sm"
        :size-md="formCol?.grid?.md"
        :size-lg="formCol?.grid?.lg"
        :size-xl="formCol?.grid?.xl"
      >
        <Heading v-if="formCol.componentType === 'Heading'" :config="formCol" />
        <InputField
          v-if="
            formCol.componentType === 'inputField' && shouldShowField(formCol)
          "
          :config="formCol"
          :allFormValues="allFormValues"
          @field-changed="handleFieldChange"
          :ref="(el) => setFieldRef(el, formCol)"
        />
        <MultiselectInput
          v-if="
            formCol.componentType === 'multiSelectInputField' &&
            shouldShowField(formCol)
          "
          :config="formCol"
          :allFormValues="allFormValues"
          @field-changed="handleFieldChange"
          :ref="(el) => setFieldRef(el, formCol)"
        />
        <CheckboxField
          v-if="
            formCol.componentType === 'checkboxField' &&
            shouldShowField(formCol)
          "
          :config="formCol"
          :allFormValues="allFormValues"
          @field-changed="handleFieldChange"
          :ref="(el) => setFieldRef(el, formCol)"
        />
        <RadioButtonField
          v-if="
            formCol.componentType === 'radioButtonField' &&
            shouldShowField(formCol)
          "
          :config="formCol"
          :allFormValues="allFormValues"
          @field-changed="handleFieldChange"
          :ref="(el) => setFieldRef(el, formCol)"
        />
        <DateInputField
          v-if="
            formCol.componentType === 'dateInputField' &&
            shouldShowField(formCol)
          "
          :config="formCol"
          :allFormValues="allFormValues"
          @field-changed="handleFieldChange"
          :ref="(el) => setFieldRef(el, formCol)"
        />
        <PhoneInputField
          v-if="
            formCol.componentType === 'phoneInputField' &&
            shouldShowField(formCol)
          "
          :config="formCol"
          :allFormValues="allFormValues"
          @field-changed="handleFieldChange"
          :ref="(el) => setFieldRef(el, formCol)"
        />
        <Alert
          v-if="formCol.componentType === 'Alert' && shouldShowField(formCol)"
          :config="formCol"
          :allFormValues="formValues"
        />
        <div
          class="dashed_bottom_border"
          v-if="formCol.componentType === 'Dashes'"
        ></div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, nextTick } from "vue";
import { IonCol, IonRow, IonGrid } from "@ionic/vue";
import Heading from "./Heading.vue";
import InputField from "./InputField.vue";
import CheckboxField from "./CheckboxField.vue";
import Alert from "./Alert.vue";
import RadioButtonField from "./RadioButtonField.vue";
import DateInputField from "./DateInputField.vue";
import PhoneInputField from "./PhoneInputField.vue";
import MultiselectInput from "./MultiSelectInput.vue";
import { FormElement } from "../interfaces/FormElement";

interface Props {
  formData: FormElement[];
}

const props = defineProps<Props>();

// Store all form values
let allFormValues = reactive<Record<string, any>>({});
const fieldRefs = ref<Map<string, any>>(new Map());

// Reactive computed property for form values
const formValues = computed(() => {
  return { ...allFormValues };
});

// Helper function to check if a field should be shown
const shouldShowField = (formCol: FormElement) => {
  if (formCol.condition && typeof formCol.condition === "function") {
    try {
      return formCol.condition(allFormValues);
    } catch (error) {
      console.warn(
        "Condition function error for field:",
        formCol.name || formCol.header,
        error
      );
      return false;
    }
  }
  return true;
};

// Set field references
const setFieldRef = (el: any, formCol: FormElement) => {
  if (el) {
    const fieldName =
      formCol.name || formCol.header || `field_${Math.random()}`;
    fieldRefs.value.set(fieldName, el);
  }
};

// Initialize form values with proper defaults
const initializeFormValues = () => {
  props.formData.forEach((col) => {
    const fieldName = col.name || col.header || `field_${Math.random()}`;
    const defaultValue = col.value ?? col.initialValue ?? "";
    if (!defaultValue) return;
    allFormValues[fieldName] = defaultValue;
    if (!col.obsValueType) return;
    (allFormValues ??= {}).obsValueType ??= {};
    allFormValues.obsValueType[fieldName] = col.obsValueType;
  });
};

// Handle field changes
const handleFieldChange = (event: {
  fieldName: string;
  value: any;
  config: FormElement;
}) => {
  allFormValues[event.fieldName] = event.value;

  // Call custom onChange if provided
  if (event.config.onChange) {
    event.config.onChange(event.value, { ...allFormValues });
  }
};

// Initialize on mount
onMounted(async () => {
  initializeFormValues();
  await nextTick();
});

// Expose form values for parent access
defineExpose({
  getFormValues: () => ({ ...allFormValues }),
  formValues: formValues, // Reactive computed property
  setFormValue: (fieldName: string, value: any) => {
    allFormValues[fieldName] = value;
    const fieldRef = fieldRefs.value.get(fieldName);
    if (fieldRef && fieldRef.setValue) {
      fieldRef.setValue(value);
    }
  },
  resetForm: () => {
    Object.keys(allFormValues).forEach((key) => {
      allFormValues[key] = "";
    });
    fieldRefs.value.forEach((fieldRef) => {
      if (fieldRef && fieldRef.setValue) {
        fieldRef.setValue("");
      }
    });
  },
  validateForm: () => {
    const errors: Record<string, string> = {};
    fieldRefs.value.forEach((fieldRef, fieldName) => {
      if (fieldRef && fieldRef.validate) {
        const error = fieldRef.validate();
        if (error) {
          errors[fieldName] = error;
        }
      }
    });
    return Object.keys(errors).length === 0 ? null : errors;
  },
});
</script>

<style scoped></style>
