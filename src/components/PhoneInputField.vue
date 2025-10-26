<template>
  <div v-if="shouldShowField">
    <!-- Header -->
    <h6 v-if="config.header" :class="config.bold">
      {{ config.header }}
      <span class="required" v-if="config.validation?.('') != null">*</span>
    </h6>

    <!-- Phone Input -->
    <div :style="{ width: config.width || '100%' }">
      <vue-tel-input
        class="custom-phone-input"
        v-model="phoneValue"
        @input="handleInput"
        @blur="handleBlur"
        @click="handleClick"
        @country-changed="handleCountryChanged"
        :placeholder="config.placeholder"
        :disabled="isDisabled"
        :class="{ error: hasError }"
        :preferredCountries="config.preferredCountries || ['MW']"
        :defaultCountry="config.defaultCountry || 'MW'"
        :initialCountry="config.initialCountry || 'MW'"
        :inputOptions="{
          showDialCode: true,
          placeholder: config.placeholder,
          ...config.inputOptions,
        }"
        :dropdownOptions="{
          showDialCodeInSelection: true,
          showSearchBox: true,
          showFlags: true,
          showDialCodeInList: true,
          searchBoxPlaceholder: 'Search here...',
          ...config.dropdownOptions,
        }"
        :mode="config.mode || 'international'"
        :autoFormat="
          config.autoFormat !== undefined ? config.autoFormat : false
        "
      />

      <!-- Error message -->
      <ion-note v-if="errorMessage && isTouched" class="error-note">
        {{ errorMessage }}
      </ion-note>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonNote } from "@ionic/vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import type {
  PhoneInputFieldConfig,
  PhoneCountryInfo,
  PhoneObject,
} from "../interfaces/StandardFormInterfaces/PhoneInputFieldConfig";

const props = defineProps<{
  config: PhoneInputFieldConfig;
  allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed", "country-changed"]);

// Internal state
const phoneValue = ref(props.config.initialValue || props.config.value || "");
const isTouched = ref(false);
const selectedCountry = ref({ dialCode: "265", iso2: "MW", name: "Malawi" });

// Computed value object that combines phone number and country info
const phoneObject = computed(() => ({
  phoneNumber: phoneValue?.value?.target
    ? phoneValue.value.target.value
    : phoneValue.value,
  countryCode: selectedCountry.value.dialCode,
  countryIso: selectedCountry.value.iso2,
  countryName: selectedCountry.value.name,
}));

// Watch for external config changes
watch(
  () => props.config.initialValue || props.config.value,
  (newValue) => {
    if (newValue !== undefined) {
      // Handle both string and object inputs
      if (typeof newValue === "string") {
        phoneValue.value = newValue;
      } else if (typeof newValue === "object" && newValue.phoneNumber) {
        phoneValue.value = newValue.phoneNumber;
        if (newValue.countryIso) {
          // Update country if provided in object
          selectedCountry.value = {
            dialCode: newValue.countryCode || selectedCountry.value.dialCode,
            iso2: newValue.countryIso,
            name: newValue.countryName || selectedCountry.value.name,
          };
        }
      }
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

// Validation - now validates the phone object
const errorMessage = computed(() => {
  if (!shouldShowField.value) return null;
  // Don't validate if field is disabled
  if (isDisabled.value) return null;
  // Pass the phone object to validation function
  return props.config.validation?.(phoneObject.value) || null;
});

const hasError = computed(() => {
  // Don't show error if field is disabled
  if (isDisabled.value) return false;
  return props.config.error || (errorMessage.value !== null && isTouched.value);
});

// Event handlers
const handleBlur = (event: FocusEvent) => {
  isTouched.value = true;
  props.config.onBlur?.(phoneObject.value, event);
};

const handleInput = () => {
  isTouched.value = true;
  // Update phoneValue which will trigger the watch
  // phoneValue.value = phoneNumber;
  // props.config.onInput?.(phoneObject.value, phoneObj);
};

const handleClick = (event: MouseEvent) => {
  props.config.onClick?.(phoneObject.value, event);
};

const handleCountryChanged = (country: PhoneCountryInfo) => {
  selectedCountry.value = country;
  emit("country-changed", country);
  props.config.onCountryChanged?.(country);
};

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
  if (newDisabled && phoneValue.value) {
    phoneValue.value = "";
  }
});

// Watch for value changes and emit events - now emits the phone object
watch(
  phoneObject,
  (newPhoneObject) => {
    props.config.onChange?.(newPhoneObject);
    emit("update:value", newPhoneObject);
    emit("field-changed", {
      fieldName: props.config.name || props.config.header,
      value: newPhoneObject,
      config: props.config,
      country: selectedCountry.value,
    });
  },
  { deep: true }
);

// Expose methods for parent access
defineExpose({
  getValue: () => phoneObject.value,
  getPhoneObject: () => phoneObject.value, // Explicit method for object
  getPhoneNumber: () => phoneValue.value, // Method to get just the number
  setValue: (
    value:
      | string
      | PhoneObject
      | {
          phoneNumber: string;
          countryCode: string;
          countryIso: string;
          countryName: string;
        }
  ) => {
    if (typeof value === "string") {
      phoneValue.value = value;
    } else if (typeof value === "object" && value.phoneNumber) {
      phoneValue.value = value.phoneNumber;
    }
  },
  getCountry: () => selectedCountry.value,
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

.custom-phone-input {
  --background: #fff;
}

.custom-phone-input :deep(.vti__input) {
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.vue-tel-input:focus-within {
  box-shadow: none;
  border: 2px solid #006401;
}
.custom-phone-input :deep(.vti__input) {
  height: 50px;
}
.custom-phone-input :deep(.vti__dropdown-list.below) {
  top: 56px;
}
.custom-phone-input :deep(.vti__search_box_container) {
  position: sticky;
  top: 0;
}
.custom-phone-input :deep(.vti__search_box) {
  border: unset;
  border-bottom: 1px solid #ccc;
  width: 100%;
  margin: 0px;
}
.custom-phone-input.error {
  border-color: #dc3545;
  border-width: 2px;
}

.custom-phone-input :deep(.vti__dropdown) {
  background-color: #fff;
}

.error-note {
  text-align: center;
  display: block;
  margin-top: 4px;
  color: #dc3545;
}
</style>
