<!-- RadioButtonField.vue -->
<template>
  <div v-if="shouldShowField">
    <!-- Header with optional clear button -->
    <div class="field-header">
      <h6 v-if="config.header" :class="config.bold">
        {{ config.header }}
        <span class="required" v-if="config.validation?.('') != null">*</span>
      </h6>

      <!-- Clear button (shown when there's a selection and clearable is enabled) -->
      <button
        v-if="config.showClearButton && selectedValue !== null"
        type="button"
        class="clear-button"
        @click="clearSelection"
        :disabled="isDisabled"
        title="Clear selection"
      >
        <ion-icon :icon="closeIcon" />
        Clear
      </button>
    </div>

    <!-- Radio Button Container -->
    <div :style="{ width: config.width || '100%' }">
      <!-- Standard Radio Group -->
      <ion-radio-group
        v-if="config.type === 'standard' || !config.type"
        :value="selectedValue"
        @ionChange="handleRadioChange"
        class="radio-group"
      >
        <div
          v-for="(option, index) in config.options"
          :key="
            typeof option.value === 'string' || typeof option.value === 'number'
              ? option.value
              : index
          "
          class="radio-item"
        >
          <ion-radio
            :value="option.value"
            :disabled="isDisabled || option.disabled"
            :class="['custom-radio', { error: hasError }]"
          />
          <ion-label
            class="radio-label"
            @click="() => selectOption(option.value)"
          >
            {{ option.label }}
            <!-- Clear icon for each radio option -->
            <button
              v-if="
                selectedValue === option.value &&
                config.showOptionClear !== false
              "
              type="button"
              class="option-clear-icon"
              @click.stop="clearSelection"
              :disabled="isDisabled"
              title="Clear this option"
            >
              <ion-icon :icon="closeIcon" />
            </button>
            <span v-if="option.description" class="option-description">
              {{ option.description }}
            </span>
          </ion-label>
        </div>
      </ion-radio-group>

      <!-- List Style Radio Group with individual clear buttons -->
      <div v-else-if="config.type === 'list'" class="radio-list">
        <div
          v-for="(option, index) in config.options"
          :key="
            typeof option.value === 'string' || typeof option.value === 'number'
              ? option.value
              : String(index)
          "
          class="radio-list-item"
          :class="{
            selected: selectedValue === option.value,
            disabled: isDisabled || option.disabled,
          }"
        >
          <div
            class="list-item-content"
            @click="() => selectOption(option.value)"
          >
            <div class="list-item-left">
              <ion-icon
                v-if="option.icon"
                :icon="option.icon"
                class="list-item-icon"
              />
              <div class="list-item-text">
                <div class="list-item-title">
                  {{ option.label }}
                  <!-- Clear icon for selected list item -->
                  <button
                    v-if="
                      selectedValue === option.value &&
                      config.showOptionClear !== false
                    "
                    type="button"
                    class="option-clear-icon inline"
                    @click.stop="clearSelection"
                    :disabled="isDisabled"
                    title="Clear this option"
                  >
                    <ion-icon :icon="closeIcon" />
                  </button>
                </div>
                <div v-if="option.description" class="list-item-description">
                  {{ option.description }}
                </div>
              </div>
            </div>
            <div class="list-item-right">
              <ion-radio
                :value="option.value"
                :checked="selectedValue === option.value"
                @ionSelect="handleRadioChange"
                :disabled="isDisabled || option.disabled"
                :class="['custom-radio', { error: hasError }]"
              />
              <!-- Individual clear button for selected item -->
              <button
                v-if="
                  config.showIndividualClear && selectedValue === option.value
                "
                type="button"
                class="item-clear-button"
                @click.stop="clearSelection"
                :disabled="isDisabled"
                title="Clear this selection"
              >
                <ion-icon :icon="closeIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Inline Radio Group -->
      <ion-radio-group
        v-else-if="config.type === 'inline'"
        :value="selectedValue"
        @ionChange="handleRadioChange"
        class="radio-inline"
      >
        <div
          v-for="(option, index) in config.options"
          :key="
            typeof option.value === 'string' || typeof option.value === 'number'
              ? option.value
              : index
          "
          class="radio-inline-item"
        >
          <ion-radio
            :value="option.value"
            :disabled="isDisabled || option.disabled"
            :class="['custom-radio', { error: hasError }]"
          />
          <ion-label
            class="radio-label"
            @click="() => selectOption(option.value)"
          >
            {{ option.label }}
            <!-- Clear icon for selected inline option -->
            <button
              v-if="
                selectedValue === option.value &&
                config.showOptionClear !== false
              "
              type="button"
              class="option-clear-icon inline"
              @click.stop="clearSelection"
              :disabled="isDisabled"
              title="Clear this option"
            >
              <ion-icon :icon="closeIcon" />
            </button>
          </ion-label>
        </div>
      </ion-radio-group>

      <!-- Button Style Radio Group with enhanced clear functionality -->
      <div v-else-if="config.type === 'button'" class="radio-button-group">
        <button
          v-for="(option, index) in config.options"
          :key="
            typeof option.value === 'string' || typeof option.value === 'number'
              ? option.value
              : String(index)
          "
          type="button"
          class="radio-button"
          :class="{
            selected: selectedValue === option.value,
            disabled: isDisabled || option.disabled,
            error: hasError,
          }"
          @click="() => selectOption(option.value)"
          :disabled="isDisabled || option.disabled"
        >
          <ion-icon
            v-if="option.icon"
            :icon="option.icon"
            class="button-icon"
          />
          {{ option.label }}
          <!-- Clear icon on selected button -->
          <ion-icon
            v-if="
              config.showButtonClear !== false && selectedValue === option.value
            "
            :icon="closeIcon"
            class="button-clear-icon"
            @click.stop="clearSelection"
          />
        </button>
      </div>

      <!-- Error message -->
      <ion-note v-if="errorMessage && isTouched" class="error-note">
        {{ errorMessage }}
      </ion-note>

      <!-- Helper text -->
      <ion-note v-if="config.helperText && !errorMessage" class="helper-note">
        {{ config.helperText }}
      </ion-note>

      <!-- Clear all button (alternative placement at bottom) -->
      <div
        v-if="config.showClearButtonBottom && selectedValue !== null"
        class="clear-section"
      >
        <button
          type="button"
          class="clear-button-bottom"
          @click="clearSelection"
          :disabled="isDisabled"
        >
          <ion-icon :icon="closeIcon" />
          Clear Selection
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import {
  IonRadio,
  IonRadioGroup,
  IonLabel,
  IonIcon,
  IonNote,
} from "@ionic/vue";
import { close as closeIcon } from "ionicons/icons";
import type { RadioButtonFieldConfig } from "../interfaces/StandardFormInterfaces/RadioButtonFieldConfig";

const props = defineProps<{
  config: RadioButtonFieldConfig;
  allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed", "cleared"]);

// Internal state
const selectedValue = ref(getInitialValue());
const isTouched = ref(false);

// Get initial value
function getInitialValue() {
  return props.config.initialValue || props.config.value || null;
}

// Watch for external config changes
watch(
  () => props.config.initialValue || props.config.value,
  (newValue) => {
    selectedValue.value = newValue || null;
  }
);

// Check if field should be disabled (dynamic disable functionality)
const isDisabled = computed(() => {
  if (typeof props.config.disabled === "boolean") {
    return props.config.disabled;
  }

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
  if (isDisabled.value) return null;
  return props.config.validation?.(selectedValue.value) || null;
});

const hasError = computed(() => {
  if (isDisabled.value) return false;
  return props.config.error || (errorMessage.value !== null && isTouched.value);
});

// Event handlers
function handleRadioChange(event: {
  detail: { value: string | number | boolean | null };
}) {
  isTouched.value = true;
  // Only allow string, number, true, or null (filter out false)
  if (event.detail.value === false) {
    selectedValue.value = null;
  } else {
    selectedValue.value = event.detail.value as string | number | true | null;
  }
  emitChange();
}

function selectOption(value: string | number | boolean | null) {
  if (isDisabled.value) return;

  const option = props.config.options?.find((opt) => opt.value === value);
  if (option?.disabled) return;

  // Allow deselection if the same option is clicked and allowDeselect is true
  if (props.config.allowDeselect && selectedValue.value === value) {
    clearSelection();
    return;
  }

  isTouched.value = true;
  // Only allow string, number, true, or null (filter out false)
  if (value === false) {
    selectedValue.value = null;
  } else {
    selectedValue.value = value as string | number | true | null;
  }
  emitChange();
}

// Enhanced clear selection function
function clearSelection() {
  if (isDisabled.value) return;

  const previousValue = selectedValue.value;
  selectedValue.value = null;
  isTouched.value = true; // Mark as touched since user interacted

  // Emit change events
  emitChange();

  // Emit specific cleared event with previous value
  emit("cleared", {
    previousValue,
    fieldName: props.config.name || props.config.header,
    config: props.config,
  });

  // Call onClear callback if provided
  props.config.onClear?.(previousValue);
}

// Emit changes
function emitChange() {
  const value = selectedValue.value;

  props.config.onChange?.(value);
  emit("update:value", value);
  emit("field-changed", {
    fieldName: props.config.name || props.config.header,
    value: value,
    config: props.config,
  });
}

// Handle blur event
function handleBlur(event: FocusEvent) {
  isTouched.value = true;
  props.config.onBlur?.(selectedValue.value, event);
}

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
  if (newDisabled && selectedValue.value) {
    selectedValue.value = null;
    emitChange();
  }
});

// Expose methods for parent access
defineExpose({
  getValue: () => selectedValue.value,
  setValue: (value: string | number | boolean | null) => {
    // Only allow string, number, true, or null (filter out false)
    if (value === false) {
      selectedValue.value = null;
    } else {
      selectedValue.value = value as string | number | true | null;
    }
  },
  isValid: computed(() => isDisabled.value || errorMessage.value === null),
  validate: () => {
    if (isDisabled.value) return null;
    isTouched.value = true;
    return errorMessage.value;
  },
  shouldShow: shouldShowField,
  clearSelection,
  getSelectedOption: () => {
    return (
      props.config.options?.find((opt) => opt.value === selectedValue.value) ||
      null
    );
  },
  markAsTouched: () => (isTouched.value = true),
  resetTouched: () => (isTouched.value = false),
  // New methods for clearing functionality
  hasSelection: computed(() => selectedValue.value !== null),
  canClear: computed(() => !isDisabled.value && selectedValue.value !== null),
});
</script>

<style scoped>
h6 {
  margin-top: 0;
  font-weight: 700;
}

.required {
  color: red;
}

.field-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
}

.option-clear-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: 1px solid #dc3545;
  border-radius: 50%;
  color: #dc3545;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 6px;
  vertical-align: middle;
}

.option-clear-icon.inline {
  margin-left: 8px;
}

.option-clear-icon:hover:not(:disabled) {
  background-color: #dc3545;
  color: white;
}

.option-clear-icon:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.option-clear-icon ion-icon {
  font-size: 8px;
}

.clear-button {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: none;
  border: 1px solid #dc3545;
  border-radius: 4px;
  color: #dc3545;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
}

.clear-button:hover:not(:disabled) {
  background-color: #dc3545;
  color: white;
}

.clear-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.clear-button ion-icon {
  font-size: 14px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.radio-label {
  cursor: pointer;
  font-size: 16px;
  line-height: 1.4;
  color: #333;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.option-description {
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: 2px;
  width: 100%;
}

.radio-list {
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
}

.radio-list-item {
  border-bottom: 1px solid #e6e6e6;
  transition: background-color 0.2s ease;
}

.radio-list-item:last-child {
  border-bottom: none;
}

.radio-list-item:hover:not(.disabled) {
  background-color: #f8f9fa;
}

.radio-list-item.selected {
  background-color: #e3f2fd;
}

.radio-list-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio-list-item.disabled .list-item-content {
  cursor: not-allowed;
}

.list-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
}

.list-item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.list-item-right {
  display: flex;
  align-items: center;
  gap: 8px;
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
  display: flex;
  align-items: center;
}

.list-item-description {
  font-size: 12px;
  color: #666;
  line-height: 1.3;
}

.item-clear-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background: none;
  border: 1px solid #dc3545;
  border-radius: 50%;
  color: #dc3545;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item-clear-button:hover:not(:disabled) {
  background-color: #dc3545;
  color: white;
}

.item-clear-button ion-icon {
  font-size: 12px;
}

.radio-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 10px;
}

.radio-inline-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.radio-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
  position: relative;
}

.radio-button:hover:not(.disabled) {
  border-color: #3880ff;
  background-color: #f8f9ff;
}

.radio-button.selected {
  border-color: #3880ff;
  background-color: #3880ff;
  color: #fff;
}

.radio-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio-button.error {
  border-color: #dc3545;
}

.button-icon {
  font-size: 16px;
}

.button-clear-icon {
  font-size: 14px;
  margin-left: auto;
  padding: 2px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.button-clear-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-radio {
  --background: #fff;
  --background-checked: #3880ff;
  --border-color: #d1d5db;
  --border-color-checked: #3880ff;
  --inner-border-color: #fff;
}

.custom-radio.error {
  --border-color: #dc3545;
  --border-color-checked: #dc3545;
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

.clear-section {
  margin-top: 12px;
  text-align: center;
}

.clear-button-bottom {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: none;
  border: 1px solid #dc3545;
  border-radius: 6px;
  color: #dc3545;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
}

.clear-button-bottom:hover:not(:disabled) {
  background-color: #dc3545;
  color: white;
}

.clear-button-bottom:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .field-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .clear-button {
    align-self: flex-end;
  }

  .radio-group {
    gap: 10px;
  }

  .radio-inline {
    flex-direction: column;
    gap: 12px;
  }

  .radio-button-group {
    flex-direction: column;
  }

  .radio-button {
    width: 100%;
    justify-content: center;
  }

  .list-item-content {
    padding: 12px;
  }

  .list-item-left {
    gap: 10px;
  }

  .option-clear-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
