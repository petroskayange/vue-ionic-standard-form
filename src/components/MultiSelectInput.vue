<!-- MultiselectField.vue -->
<template>
  <div v-if="shouldShowField">
    <!-- Header -->
    <h6 v-if="config.header" :class="config.bold">
      {{ config.header }}
      <span class="required" v-if="config.validation?.('') != null">*</span>
    </h6>

    <!-- Multiselect Container -->
    <div
      :style="{ width: config.width || '100%' }"
      class="multiselect-wrapper"
      :class="{ disabled: isDisabled }"
    >
      <!-- Left Icon -->
      <ion-icon v-if="config.icon" class="left-icon" :icon="config.icon" />
      <!-- <div v-if="config.leftIcon" class="left-icon" v-html="config.leftIcon"></div> -->

      <VueMultiselect
        v-model="selectedValue"
        @update:model-value="handleChange"
        @open="handleOpen"
        @close="handleClose"
        @search-change="handleSearchChange"
        @tag="handleTag"
        :multiple="config.isMultiple || false"
        :taggable="config.taggable || false"
        :hide-selected="config.hideSelected || false"
        :close-on-select="config.closeOnSelect !== false"
        :open-direction="config.openDirection || 'bottom'"
        :prevent-autofocus="config.preventAutofocus || true"
        :loading="config.loading || false"
        :searchable="config.searchable !== false"
        :disabled="isDisabled"
        :placeholder="config.placeholder || ''"
        :select-label="config.selectLabel || ''"
        :tag-placeholder="config.tagPlaceholder || ''"
        :label="config.label || 'name'"
        :track-by="config.trackBy || 'concept_id'"
        :options="computedOptions"
        :class="[
          'custom-multiselect',
          { error: hasError, 'disabled-field': isDisabled },
        ]"
        class="no-focus"
      />

      <!-- Disabled overlay -->
      <div v-if="isDisabled" class="disabled-overlay"></div>

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
import { IonNote } from "@ionic/vue";
import VueMultiselect from "vue-multiselect";
import type { MultiSelectFieldConfig } from "../interfaces/StandardFormInterfaces/MultiselectFieldConfig";

const props = defineProps<{
  config: MultiSelectFieldConfig;
  allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed", "search-change"]);

// Internal state
const selectedValue = ref(
  props.config.initialValue ||
    props.config.value ||
    (props.config.isMultiple ? [] : null)
);
const isTouched = ref(false); // Track if field has been interacted with

// Watch for external config changes
watch(
  () => props.config.initialValue || props.config.value,
  (newValue) => {
    if (newValue !== undefined) {
      selectedValue.value = newValue;
      emitChange();
    }
  }
);

// Computed options - can be static array or dynamic function
const computedOptions = computed(() => {
  // If options is a function, call it with allFormValues
  if (typeof props.config.options === "function") {
    try {
      const result = props.config.options(props.allFormValues);
      // Ensure the result is an array
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.warn("Options function error:", error);
      return []; // Return empty array if function fails
    }
  }

  // If options is an array, return it directly
  if (Array.isArray(props.config.options)) {
    return props.config.options;
  }

  // Default to empty array
  return [];
});

// Watch for options changes and validate current selection
watch(
  computedOptions,
  (newOptions) => {
    // If current selection is not valid with new options, clear it
    if (selectedValue.value && newOptions.length > 0) {
      const trackBy = props.config.trackBy || "concept_id";

      if (props.config.isMultiple && Array.isArray(selectedValue.value)) {
        // For multiple selection, filter out invalid options
        const validSelections = selectedValue.value.filter((selected) =>
          newOptions.some((option) => option[trackBy] === selected[trackBy])
        );

        if (validSelections.length !== selectedValue.value.length) {
          selectedValue.value = validSelections;
          emitChange();
        }
      }
    }
  },
  { deep: true }
);

// Check if field should be disabled (dynamic disable functionality)
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
  return (
    props.config.validation?.(selectedValue.value, props.allFormValues) || null
  );
});

const hasError = computed(() => {
  // Don't show error if field is disabled
  if (isDisabled.value) return false;
  return props.config.error || (errorMessage.value !== null && isTouched.value);
});

// Event handlers
const handleChange = (value: any) => {
  if (isDisabled.value) return; // Prevent changes when disabled

  isTouched.value = true; // Mark as touched when value changes
  selectedValue.value = value;
  emitChange();
};

const handleOpen = () => {
  if (isDisabled.value) return; // Prevent opening when disabled

  isTouched.value = true; // Mark as touched when dropdown opens
  props.config.onOpen?.(selectedValue.value);
};

const handleClose = () => {
  props.config.onClose?.(selectedValue.value);
};

const handleSearchChange = (searchQuery: string) => {
  if (isDisabled.value) return; // Prevent search when disabled

  isTouched.value = true; // Mark as touched when user searches
  props.config.onSearchChange?.(searchQuery);
  emit("search-change", searchQuery);
};

const handleTag = (newTag: any) => {
  if (isDisabled.value) return; // Prevent adding tags when disabled

  isTouched.value = true; // Mark as touched when user adds a tag
  props.config.onTag?.(newTag);
};

// Emit changes
const emitChange = () => {
  props.config.onChange?.(selectedValue.value);
  emit("update:value", selectedValue.value);
  emit("field-changed", {
    fieldName: props.config.name || props.config.header,
    value: selectedValue.value,
    config: props.config,
  });
};

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
  if (newDisabled && selectedValue.value) {
    selectedValue.value = props.config.isMultiple ? [] : null;
    emitChange();
  }
});

// Expose methods for parent access
defineExpose({
  getValue: () => selectedValue.value,
  setValue: (value: any) => {
    selectedValue.value = value;
  },
  isValid: computed(() => isDisabled.value || errorMessage.value === null), // Consider disabled fields as valid
  validate: () => {
    // Don't validate disabled fields
    if (isDisabled.value) return null;
    isTouched.value = true; // Mark as touched when manually validating
    return errorMessage.value;
  },
  shouldShow: shouldShowField,
  markAsTouched: () => (isTouched.value = true), // Allow parent to mark as touched
  resetTouched: () => (isTouched.value = false), // Allow parent to reset touched state
  clearSelection: () => {
    selectedValue.value = props.config.isMultiple ? [] : null;
    emitChange();
  },
  getOptions: () => computedOptions.value, // Expose computed options
});
</script>

<style scoped>
h6 {
  margin-top: 0;
}

.required {
  color: red;
}

.custom-multiselect {
  min-height: 56px;
}

.multiselect-wrapper {
  position: relative;
}

.multiselect-wrapper.disabled {
  position: relative;
}

.disabled-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(237, 237, 237, 0);
  cursor: not-allowed;
  border-radius: 4px;
}

.left-icon {
  position: absolute;
  left: 10px;
  top: 30px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  z-index: 10;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: #999;
}

.custom-multiselect.error :deep(.multiselect__tags) {
  border-color: #dc3545;
  border-width: 2px;
}

.no-focus {
  outline: none !important;
}

.error-note {
  display: block;
  margin-top: 8px;
  color: #dc3545;
  font-size: 12px;
  text-align: center;
}

.helper-note {
  display: block;
  margin-top: 8px;
  color: #666;
  font-size: 12px;
}

/* Vue Multiselect styling */
:deep(.multiselect__tags) {
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  min-height: 56px;
  padding: 0 60px 0 16px; /* Adjust left padding based on icon presence */
  font-size: 18px;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

/* Add left padding when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__tags) {
  padding-left: 10px;
}

:deep(.multiselect__placeholder) {
  color: #999;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  padding: 0;
  line-height: 56px; /* Center vertically */
  position: absolute;
  left: 0; /* Default position */
  top: 0;
  width: calc(100% - 60px); /* Account for right arrow */
}

:deep(.multiselect--disabled) {
  border-radius: 5px;
}
/* Adjust placeholder position when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__placeholder) {
  left: 34px; /* Space for left icon */
  width: calc(100% - 94px); /* Account for both icons */
}

:deep(.multiselect__input) {
  background: transparent;
  border: none;
  font-size: 16px !important;
  font-weight: 700 !important;
  color: #000 !important; /* Black color */
  margin: 0 !important;
  padding: 0 !important;
  line-height: 56px !important; /* Center vertically */
  height: 56px !important;
  width: 100% !important;
  position: relative;
  z-index: 1;
}

:deep(.multiselect__input::placeholder) {
  color: #999 !important;
  font-weight: 400 !important;
}

:deep(.multiselect__tag) {
  background: #ddeedd;
  color: #006401;
  border-radius: 4px;
  margin: 2px 8px 2px 0;
  padding: 4px 26px 4px 8px;
  font-size: 12px;
  font-weight: 400;
  align-self: center;
}

:deep(.multiselect__tag-icon:after) {
  color: #006401;
  font-size: 14px;
}

:deep(.multiselect__tag-icon:hover) {
  background: rgba(255, 255, 255, 0.2);
}

:deep(.multiselect__select) {
  height: 56px;
  width: 40px;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

:deep(.multiselect__select:before) {
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: "";
  height: 0;
  width: 0;
  position: relative;
  top: 0;
}

:deep(.multiselect__content-wrapper) {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 1000;
}

:deep(.multiselect__option) {
  padding: 12px;
  font-size: 14px;
  color: #333;
}

:deep(.multiselect__option--highlight) {
  background: #ddeedd;
  color: #006401;
}

:deep(.multiselect__option--selected) {
  background: #006401;
  color: #fff;
  font-weight: 600;
}

:deep(.multiselect__loading) {
  background: #f8f9fa;
}

/* Single select specific styling */
:deep(.multiselect__single) {
  background: transparent;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  margin: 0;
  margin-left: 5px;
  padding: 0;
  position: absolute;
  overflow: hidden;
  height: 40px;
  align-content: center;
}

/* Adjust single select position when icon is present */
.multiselect-wrapper:has(.left-icon) :deep(.multiselect__single) {
  left: 34px; /* Space for left icon */
  width: calc(100% - 94px); /* Account for both icons */
}

/* Improved Disabled State Styling */
.disabled-field :deep(.multiselect__tags) {
  background: #f8f9fa !important;
  border-color: #dee2e6 !important;
  color: #6c757d !important;
}

.disabled-field :deep(.multiselect__placeholder) {
  color: #6c757d !important;
}

.disabled-field :deep(.multiselect__input) {
  color: #6c757d !important;
  cursor: not-allowed;
}

.disabled-field :deep(.multiselect__single) {
  color: #6c757d !important;
}

.disabled-field :deep(.multiselect__select) {
  cursor: not-allowed;
}

.disabled-field :deep(.multiselect__select:before) {
  border-color: #6c757d transparent transparent !important;
}

.disabled-field :deep(.multiselect__tag) {
  background: #e9ecef !important;
  color: #6c757d !important;
}

.disabled-field :deep(.multiselect__tag-icon:after) {
  color: #6c757d !important;
}

/* Disabled state for left icon */
.multiselect-wrapper.disabled .left-icon :deep(svg) {
  fill: #6c757d !important;
}

/* Remove the old disabled styling */
:deep(.multiselect--disabled .multiselect__tags) {
  background: #efefef !important;
  border-color: #dee2e6 !important;
  opacity: 1 !important; /* Remove opacity for cleaner look */
  cursor: not-allowed;
}

:deep(.multiselect--disabled .multiselect__placeholder) {
  color: #6c757d !important;
}

:deep(.multiselect--disabled .multiselect__input) {
  background: none !important;
  cursor: not-allowed;
  color: #6c757d !important;
}

:deep(.multiselect--disabled .multiselect__single) {
  color: #6c757d !important;
}

:deep(.multiselect--disabled .multiselect__select) {
  cursor: not-allowed;
  background: #ededed;
  color: #a6a6a6;
  border: solid 1px #dee2e6;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

:deep(.multiselect--disabled .multiselect__select:before) {
  border-color: #6c757d transparent transparent !important;
}

:deep(.multiselect--disabled .multiselect__tag) {
  background: #e9ecef !important;
  color: #6c757d !important;
  opacity: 1 !important; /* Remove opacity for cleaner look */
}

:deep(.multiselect__tags-wrap) {
  margin-left: 25px;
}
</style>
