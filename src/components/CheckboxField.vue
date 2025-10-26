<template>
  <div>
    <!-- Header -->
    <h6 v-if="config.header" :class="config.bold">
      {{ config.header }}
      <span class="required" v-if="config.validation?.('') != null">*</span>
    </h6>

    <!-- Checkbox Container -->
    <div :style="{ width: config.width || '100%' }">
      <!-- Single Checkbox -->
      <div
        v-if="config.type === 'single'"
        class="checkbox-container"
        :class="{ disabled: isDisabled }"
      >
        <ion-checkbox
          v-model="checkboxValue"
          @ionChange="handleSingleChange"
          @ionBlur="handleBlur"
          :disabled="isDisabled"
          :class="['custom-checkbox', { error: hasError }]"
        />
        <ion-label
          class="checkbox-label"
          :class="{ disabled: isDisabled }"
          @click="toggleSingle"
        >
          {{ config.label }}
        </ion-label>
      </div>

      <!-- Multiple Checkboxes -->
      <div v-else-if="config.type === 'multiple'" class="checkbox-group">
        <div
          v-for="(option, index) in config.options"
          :key="
            typeof option.value === 'string' || typeof option.value === 'number'
              ? option.value
              : String(index)
          "
          class="checkbox-item"
          :class="{ disabled: isDisabled || option.disabled }"
        >
          <ion-checkbox
            :checked="isOptionSelected(option.value)"
            @ionChange="(e) => handleMultipleChange(option.value, e)"
            @ionBlur="handleBlur"
            :disabled="isDisabled || option.disabled"
            :class="['custom-checkbox', { error: hasError }]"
          />
          <ion-label
            class="checkbox-label"
            :class="{ disabled: isDisabled || option.disabled }"
            @click="() => toggleOption(option.value)"
          >
            {{ option.label }}
            <span
              v-if="option.description"
              class="option-description"
              :class="{ disabled: isDisabled || option.disabled }"
            >
              {{ option.description }}
            </span>
          </ion-label>
        </div>
      </div>

      <!-- Checkbox List with Icons -->
      <div v-else-if="config.type === 'list'" class="checkbox-list">
        <div
          v-for="(option, index) in config.options"
          :key="
            typeof option.value === 'string' || typeof option.value === 'number'
              ? option.value
              : String(index)
          "
          class="checkbox-list-item"
          :class="{
            selected: isOptionSelected(option.value),
            disabled: isDisabled || option.disabled,
          }"
        >
          <div class="list-item-content">
            <div class="list-item-left">
              <ion-icon
                v-if="option.icon"
                :icon="option.icon"
                class="list-item-icon"
                :class="{ disabled: isDisabled || option.disabled }"
              />
              <div class="list-item-text">
                <div
                  class="list-item-title"
                  :class="{ disabled: isDisabled || option.disabled }"
                >
                  {{ option.label }}
                </div>
                <div
                  v-if="option.description"
                  class="list-item-description"
                  :class="{ disabled: isDisabled || option.disabled }"
                >
                  {{ option.description }}
                </div>
              </div>
            </div>
            <ion-checkbox
              :checked="isOptionSelected(option.value)"
              @ionChange="(e) => handleMultipleChange(option.value, e)"
              @ionBlur="handleBlur"
              :disabled="isDisabled || option.disabled"
              :class="['custom-checkbox', { error: hasError }]"
            />
          </div>
        </div>
      </div>

      <!-- Error message -->
      <ion-note v-if="errorMessage && isTouched" class="error-note">
        {{ errorMessage }}
      </ion-note>

      <!-- Helper text -->
      <ion-note v-if="config.helperText && !errorMessage" class="helper-note">
        {{ config.helperText }}
      </ion-note>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonCheckbox, IonLabel, IonIcon, IonNote } from "@ionic/vue";
import type { CheckboxFieldConfig } from "../interfaces/StandardFormInterfaces/CheckboxFieldConfig";

const props = defineProps<{
  config: CheckboxFieldConfig;
  allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed"]);

// Internal state
const checkboxValue = ref(getInitialValue());
const selectedValues = ref(getInitialSelectedValues());
const isTouched = ref(false); // Track if field has been interacted with

// Get initial value based on type
function getInitialValue() {
  if (props.config.type === "single") {
    return props.config.initialValue || props.config.value || false;
  }
  return false;
}

function getInitialSelectedValues() {
  if (props.config.type === "multiple" || props.config.type === "list") {
    const initial = props.config.initialValue || props.config.value;
    if (Array.isArray(initial)) {
      return [...initial];
    }
    return [];
  }
  return [];
}

// Watch for external config changes
watch(
  () => props.config.initialValue || props.config.value,
  (newValue) => {
    if (props.config.type === "single") {
      checkboxValue.value = newValue || false;
    } else if (
      props.config.type === "multiple" ||
      props.config.type === "list"
    ) {
      selectedValues.value = Array.isArray(newValue) ? [...newValue] : [];
    }
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
      return false; // Default to enabled if function fails
    }
  }

  return false; // Default to enabled
});

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
  if (newDisabled) {
    if (props.config.type === "single") {
      if (checkboxValue.value) {
        checkboxValue.value = false;
      }
    } else {
      if (selectedValues.value.length > 0) {
        selectedValues.value = [];
      }
    }
  }
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
  return props.config.validation?.(getCurrentValue()) || null;
});

const hasError = computed(() => {
  // Don't show error if field is disabled
  if (isDisabled.value) return false;
  return props.config.error || (errorMessage.value !== null && isTouched.value);
});

// Get current value based on type
function getCurrentValue() {
  if (props.config.type === "single") {
    return checkboxValue.value;
  }
  return selectedValues.value;
}

// Check if option is selected (for multiple/list types)
function isOptionSelected(value: string | number | boolean) {
  return selectedValues.value.includes(value);
}

// Event handlers for single checkbox
function handleSingleChange(event: { detail: { checked: any } }) {
  if (isDisabled.value) return;
  isTouched.value = true; // Mark as touched when user changes value
  checkboxValue.value = event.detail.checked;
  emitChange();
}

function toggleSingle() {
  if (isDisabled.value) return;
  isTouched.value = true; // Mark as touched when user clicks label
  checkboxValue.value = !checkboxValue.value;
  emitChange();
}

// Event handlers for multiple checkboxes
function handleMultipleChange(
  optionValue: string | number | boolean,
  event: { detail: { checked: any } }
) {
  if (isDisabled.value) return;
  isTouched.value = true; // Mark as touched when user changes value
  if (event.detail.checked) {
    if (!selectedValues.value.includes(optionValue)) {
      selectedValues.value.push(optionValue);
    }
  } else {
    const index = selectedValues.value.indexOf(optionValue);
    if (index > -1) {
      selectedValues.value.splice(index, 1);
    }
  }
  emitChange();
}

function toggleOption(optionValue: string | number | boolean) {
  if (isDisabled.value) return;

  const option = props.config.options?.find((opt) => opt.value === optionValue);
  if (option?.disabled) return;

  isTouched.value = true; // Mark as touched when user clicks label

  if (selectedValues.value.includes(optionValue)) {
    const index = selectedValues.value.indexOf(optionValue);
    selectedValues.value.splice(index, 1);
  } else {
    selectedValues.value.push(optionValue);
  }
  emitChange();
}

// Emit changes
function emitChange() {
  const value = getCurrentValue();

  props.config.onChange?.(value);
  emit("update:value", value);
  emit("field-changed", {
    fieldName: props.config.name || props.config.header,
    value: value,
    config: props.config,
  });
}

function handleBlur(event: any) {
  if (isDisabled.value) return;
  isTouched.value = true; // Mark as touched when user leaves the field
  props.config.onBlur?.(getCurrentValue(), event);
}

// Expose methods for parent access
defineExpose({
  getValue: () => getCurrentValue(),
  setValue: (value: any) => {
    if (props.config.type === "single") {
      checkboxValue.value = Boolean(value);
    } else {
      selectedValues.value = Array.isArray(value) ? [...value] : [];
    }
  },
  isValid: computed(() => isDisabled.value || errorMessage.value === null), // Consider disabled fields as valid
  validate: () => {
    // Don't validate disabled fields
    if (isDisabled.value) return null;
    isTouched.value = true; // Mark as touched when manually validating
    return errorMessage.value;
  },
  shouldShow: shouldShowField,
  selectAll: () => {
    if (isDisabled.value) return;
    if (props.config.type === "multiple" || props.config.type === "list") {
      isTouched.value = true; // Mark as touched when programmatically changed
      selectedValues.value =
        props.config.options?.map((opt) => opt.value) || [];
      emitChange();
    }
  },
  deselectAll: () => {
    if (isDisabled.value) return;
    if (props.config.type === "multiple" || props.config.type === "list") {
      isTouched.value = true; // Mark as touched when programmatically changed
      selectedValues.value = [];
      emitChange();
    }
  },
  markAsTouched: () => (isTouched.value = true), // Allow parent to mark as touched
  resetTouched: () => (isTouched.value = false), // Allow parent to reset touched state
});
</script>

<style scoped>
h6 {
  margin-top: 0;
}

.required {
  color: red;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.checkbox-label {
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
}

.option-description {
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: 2px;
}

.checkbox-list {
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
}

.checkbox-list-item {
  border-bottom: 1px solid #e6e6e6;
  transition: background-color 0.2s ease;
}

.checkbox-list-item:last-child {
  border-bottom: none;
}

.checkbox-list-item:hover {
  background-color: #f8f9fa;
}

.checkbox-list-item.selected {
  background-color: #e3f2fd;
}

.list-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}

.list-item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.list-item-icon {
  color: #666;
  font-size: 20px;
}

.list-item-text {
  flex: 1;
}

.list-item-title {
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.list-item-description {
  font-size: 12px;
  color: #666;
  line-height: 1.3;
}

.custom-checkbox {
  --background: #f5f5f5;
  --background-checked: #4a5568;
  --border-color: #6b7280;
  --border-color-checked: #4a5568;
  --checkmark-color: #fff;
  --border-width: 2px;
}

.custom-checkbox.error {
  --border-color: #dc3545;
  --border-color-checked: #dc3545;
  --background-checked: #dc3545;
}

/* Disabled checkbox styling */
ion-checkbox[disabled] {
  --background: #f9f9f9;
  --background-checked: #d1d5db;
  --border-color: #e5e7eb;
  --border-color-checked: #d1d5db;
  --checkmark-color: #9ca3af;
  opacity: 0.6;
}

/* Disabled container styling */
.checkbox-container.disabled,
.checkbox-item.disabled {
  opacity: 0.6;
}

/* Disabled label styling */
.checkbox-label.disabled {
  color: #9ca3af !important;
  cursor: not-allowed;
}

/* Disabled option description styling */
.option-description.disabled {
  color: #d1d5db !important;
}

/* Disabled list item styling */
.checkbox-list-item.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.checkbox-list-item.disabled:hover {
  background-color: transparent;
}

.list-item-title.disabled {
  color: #9ca3af !important;
}

.list-item-description.disabled {
  color: #d1d5db !important;
}

.list-item-icon.disabled {
  color: #d1d5db !important;
}

.error-note {
  display: block;
  margin-top: 8px;
  color: #dc3545;
  font-size: 12px;
}

.helper-note {
  display: block;
  margin-top: 8px;
  color: #666;
  font-size: 12px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .checkbox-group {
    gap: 10px;
  }

  .list-item-content {
    padding: 12px;
  }

  .list-item-left {
    gap: 10px;
  }
}
</style>
