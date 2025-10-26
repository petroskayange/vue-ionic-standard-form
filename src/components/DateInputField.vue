<template>
  <div v-if="shouldShowField">
    <!-- Header -->
    <h6 v-if="config.header" :class="config.bold">
      {{ config.header }}
      <span class="required" v-if="config.validation?.('') != null">*</span>
    </h6>

    <!-- Date Picker -->
    <div :style="{ width: config.width || '100%' }">
      <VueDatePicker
        @date-update="handleDateUpdate"
        auto-apply
        :flow="flow"
        vertical
        :enable-time-picker="false"
        :auto-position="true"
        :min-date="config.minDate"
        :max-date="config.maxDate || HisDate.sessionDate()"
        prevent-min-max-navigation
      >
        <template #trigger>
          <ion-input
            :value="inputValue"
            @ionBlur="handleBlur"
            @ionInput="handleInput"
            @click="handleClick"
            fill="outline"
            :placeholder="config.placeholder"
            :disabled="isDisabled"
            :class="['custom-input', { error: hasError }]"
            :style="{
              minHeight: (config.minHeight || 56) + 'px',
              '--placeholder-font-size': config.placeholderFontSize || '14px',
              '--placeholder-font-weight':
                config.placeholderFontWeight || '600',
            }"
          >
            <!-- Left content -->
            <ion-label
              v-if="config.icon || config.leftText"
              slot="start"
              class="start-content"
            >
              <ion-icon v-if="config.icon" :icon="config.icon" />
              <span v-if="config.leftText" class="left-text">{{
                config.leftText
              }}</span>
            </ion-label>

            <!-- Right content -->
            <ion-label
              v-if="config.unit || config.rightIcon"
              slot="end"
              class="end-content"
            >
              <ion-icon v-if="config.rightIcon" :icon="config.rightIcon" />
              <span v-if="config.unit">{{ config.unit }}</span>
            </ion-label>

            <!-- Action button -->
            <ion-button
              v-if="config.actionButton?.show"
              slot="end"
              @click="handleActionClick"
              size="small"
            >
              <ion-icon
                v-if="config.actionButton.icon"
                :icon="config.actionButton.icon"
                slot="start"
              />
              {{ config.actionButton.text }}
            </ion-button>
          </ion-input>
        </template>
      </VueDatePicker>

      <!-- Error message -->
      <ion-note v-if="errorMessage && isTouched" class="error-note">
        {{ errorMessage }}
      </ion-note>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonInput, IonButton, IonLabel, IonIcon, IonNote } from "@ionic/vue";
import HisDate from "../Date";
import type { DateFieldConfig } from "../interfaces/StandardFormInterfaces/DateFieldConfig";

const props = defineProps<{
  config: DateFieldConfig;
  allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "update:rawValue", "field-changed"]);

// Internal state
const inputValue = ref(props.config.initialValue || props.config.value || "");
const rawDateValue = ref(null);
const isTouched = ref(false);
const flow = ref(["year", "month", "calendar"]);

// Watch for external config changes
watch(
  () => props.config.initialValue || props.config.value,
  (newValue) => {
    if (newValue !== undefined) inputValue.value = newValue;
  }
);

// Check if field should be disabled
const isDisabled = computed(() => {
  // Check for static disabled property
  if (typeof props.config.disabled === "boolean") {
    return props.config.disabled;
  }

  // Check for dynamic disabled function
  if (typeof props.config.disabled === "function") {
    try {
      return props.config.disabled(props.allFormValues);
    } catch (error) {
      console.warn("Disabled function error:", error);
      return false;
    }
  }

  return false;
});

// Check if field should be shown based on condition
const shouldShowField = computed(() => {
  if (props.config.condition && typeof props.config.condition === "function") {
    try {
      return props.config.condition(props.allFormValues);
    } catch (error) {
      console.warn("Condition function error:", error);
      return false;
    }
  }
  return true;
});

// Validation
const errorMessage = computed(() => {
  if (!shouldShowField.value) return null;
  // Don't validate if field is disabled
  if (isDisabled.value) return null;
  return props.config.validation?.(inputValue.value) || null;
});

const hasError = computed(() => {
  // Don't show error if field is disabled
  if (isDisabled.value) return false;
  return props.config.error || (errorMessage.value !== null && isTouched.value);
});

// Utility methods
const formatDate = (date: string | Date) => {
  return HisDate.toStandardHisDisplayFormat(date);
};

// Event handlers
const handleDateUpdate = (date: any) => {
  const formattedDate = formatDate(date);
  inputValue.value = formattedDate;
  rawDateValue.value = date;
  isTouched.value = true;

  // Emit events
  emit("update:value", formattedDate);
  emit("update:rawValue", date);
  emit("field-changed", {
    fieldName: props.config.name || props.config.header,
    value: formattedDate,
    rawValue: date,
    config: props.config,
  });

  // Call config callbacks
  props.config.onChange?.(formattedDate, date);
};

const handleBlur = (event: any) => {
  isTouched.value = true;
  props.config.onBlur?.(inputValue.value, event);
};

const handleInput = (event: Event) => {
  isTouched.value = true;
  props.config.onInput?.(inputValue.value, event);
};

const handleClick = (event: MouseEvent) => {
  props.config.onClick?.(inputValue.value, event);
};

const handleActionClick = (event: MouseEvent) => {
  props.config.onActionClick?.(inputValue.value, event);
};

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
  if (newDisabled && inputValue.value) {
    inputValue.value = "";
    rawDateValue.value = null;
  }
});

// Expose methods for parent access
defineExpose({
  getValue: () => inputValue.value,
  getRawValue: () => rawDateValue.value,
  setValue: (value: string) => (inputValue.value = value),
  setRawValue: (value: null) => (rawDateValue.value = value),
  isValid: computed(() => isDisabled.value || errorMessage.value === null),
  validate: () => {
    if (isDisabled.value) return null;
    isTouched.value = true;
    return errorMessage.value;
  },
  shouldShow: shouldShowField,
  markAsTouched: () => (isTouched.value = true),
  resetTouched: () => (isTouched.value = false),
});
</script>

<style scoped>
h6 {
  margin-top: 0;
}

.required {
  color: red;
}

.start-content {
  display: flex;
  align-items: center;
}

.left-text {
  font-size: 15px;
  padding-left: 10px;
  color: #b4b0b0;
  width: 95px;
}

.end-content {
  border-left: 1px solid #e6e6e6;
  padding-left: 10px;
}

.custom-input {
  --background: #fff;
  --placeholder-font-weight: 600;
  --placeholder-font-size: 14px;
  --placeholder-opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
}

.custom-input.error {
  --border-color: #dc3545;
  --border-width: 2px;
}

.error-note {
  text-align: center;
  display: block;
  margin-top: 4px;
  color: #dc3545;
}
</style>
