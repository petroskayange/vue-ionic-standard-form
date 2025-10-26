<template>
  <div>
    <h6 v-if="config.header" :class="config.bold">
      {{ config.header }}
      <span class="required" v-if="config.validation?.('') != null">*</span>
    </h6>

    <div :style="{ width: config.width || '100%' }">
      <ion-input
        v-model="inputValue"
        @ionBlur="handleBlur"
        @ionInput="handleInput"
        @click="handleClick"
        fill="outline"
        :placeholder="config.placeholder"
        :inputmode="config.type === 'number' ? 'numeric' : 'text'"
        :disabled="isDisabled"
        :class="['custom-input', { error: hasError }]"
        :style="{ minHeight: (config.minHeight || 56) + 'px' }"
      >
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

        <ion-label
          v-if="config.unitOptions || config.unit || config.rightIcon"
          slot="end"
          class="end-content"
        >
          <ion-icon
            v-if="config.rightIcon && !config.unitOptions"
            :icon="config.rightIcon"
          />
          <span v-if="config.unit && !config.unitOptions" class="static-unit">{{
            config.unit
          }}</span>

          <ion-select
            v-if="config.unitOptions"
            v-model="selectedUnit"
            interface="popover"
            :placeholder="config.unitPlaceholder"
            class="unit-dropdown unit-select-popover"
            aria-label="Select Unit"
            @ionBlur="handleUnitBlur"
            :class="{ error: hasUnitError }"
          >
            <ion-select-option
              v-for="unitOption in config.unitOptions"
              :key="unitOption.value"
              :value="unitOption.value"
            >
              {{ unitOption.label }}
            </ion-select-option>
          </ion-select>
        </ion-label>

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

      <ion-note v-if="errorMessage && isTouched" class="error-note">
        {{ errorMessage }}
      </ion-note>

      <ion-note
        v-if="unitErrorMessage && isUnitTouched"
        class="error-note unit-error-note"
      >
        {{ unitErrorMessage }}
      </ion-note>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import {
  IonInput,
  IonButton,
  IonLabel,
  IonIcon,
  IonNote,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import type { InputCustomEvent } from "@ionic/vue";
import type { InputFieldConfig } from "../interfaces/StandardFormInterfaces/InputFieldConfig";

const props = defineProps<{
  config: InputFieldConfig;
  allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed", "update:unit"]);

const inputValue = ref(props.config.initialValue || props.config.value || "");
const selectedUnit = ref(
  props.config.initialUnit || (props.config.unitOptions ? null : "")
);
const isTouched = ref(false);
const isUnitTouched = ref(false);

watch(
  () => props.config.initialValue || props.config.value,
  (newValue) => {
    if (newValue !== undefined) inputValue.value = newValue;
  }
);

watch(
  () => props.config.initialUnit,
  (newUnit) => {
    if (newUnit !== undefined && newUnit !== selectedUnit.value) {
      selectedUnit.value = newUnit;
    }
  }
);

onMounted(() => {
  if (
    props.config.unitOptions &&
    props.config.initialUnit !== undefined &&
    props.config.initialUnit !== null
  ) {
    emit("update:unit", props.config.initialUnit);
    emit("field-changed", {
      fieldName: `${props.config.name || props.config.header}_unit`,
      value: props.config.initialUnit,
      config: props.config,
    });
  }
});

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

const errorMessage = computed(() => {
  if (!shouldShowField.value) return null;
  if (isDisabled.value) return null;
  return props.config.validation?.(inputValue.value) || null;
});

const hasError = computed(() => {
  if (isDisabled.value) return false;
  return props.config.error || (errorMessage.value !== null && isTouched.value);
});

const unitErrorMessage = computed(() => {
  if (!shouldShowField.value) return null;
  if (isDisabled.value) return null;
  if (props.config.unitOptions) {
    return props.config.unitValidation?.(selectedUnit.value) || null;
  }
  return null;
});

const hasUnitError = computed(() => {
  if (isDisabled.value) return false;
  return unitErrorMessage.value !== null && isUnitTouched.value;
});

const handleBlur = (event: InputCustomEvent<FocusEvent>) => {
  isTouched.value = true;
  props.config.onBlur?.(inputValue.value, event.detail);
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

const handleUnitBlur = () => {
  isUnitTouched.value = true;
};

watch(isDisabled, (newDisabled) => {
  if (newDisabled) {
    if (inputValue.value) inputValue.value = "";
    if (selectedUnit.value)
      selectedUnit.value =
        props.config.unitOptions && props.config.unitOptions.length > 0
          ? props.config.unitOptions[0].value
          : null;
  }
});

watch(inputValue, (newValue) => {
  props.config.onChange?.(newValue);
  emit("update:value", newValue);
  emit("field-changed", {
    fieldName: props.config.name || props.config.header,
    value: newValue,
    config: props.config,
  });
});

watch(selectedUnit, (newUnit) => {
  emit("update:unit", newUnit);
  emit("field-changed", {
    fieldName: `${props.config.name || props.config.header}_unit`,
    value: newUnit,
    config: props.config,
  });
});

defineExpose({
  getValue: () => inputValue.value,
  getUnit: () => selectedUnit.value,
  setValue: (value: any) => (inputValue.value = value),
  setUnit: (unit: string | null) => (selectedUnit.value = unit),
  isValid: computed(
    () =>
      isDisabled.value ||
      (errorMessage.value === null && unitErrorMessage.value === null)
  ),
  validate: () => {
    if (isDisabled.value) return null;

    isTouched.value = true;
    isUnitTouched.value = true;

    if (errorMessage.value && unitErrorMessage.value) {
      return `${errorMessage.value}\n${unitErrorMessage.value}`;
    } else if (errorMessage.value) {
      return errorMessage.value;
    } else if (unitErrorMessage.value) {
      return unitErrorMessage.value;
    }
    return null;
  },
  shouldShow: shouldShowField,
  markAsTouched: () => {
    isTouched.value = true;
    isUnitTouched.value = true;
  },
  resetTouched: () => {
    isTouched.value = false;
    isUnitTouched.value = false;
  },
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
  padding-left: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 60px;
}

.static-unit {
  font-size: 13px;
  color: #555;
  padding-right: 5px;
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

.unit-error-note {
  font-size: 13px;
}

.unit-dropdown {
  --padding-start: 2px;
  --padding-end: 2px;
  font-size: 13px;
  min-width: 60px;
  max-width: 90px;
  height: 30px;
  --border-width: 0;
  --background: transparent;
  --color: #333;
  padding-right: 5px;
}

.unit-dropdown::part(text) {
  font-size: 13px;
  padding-right: 2px;
  font-weight: normal;
}

.unit-dropdown::part(icon) {
  font-size: 14px;
  padding-left: 0;
  color: #666;
  opacity: 0.8;
}

.unit-dropdown.error {
  --color: #dc3545;
}
</style>

<style scoped>
ion-popover:has(ion-select-popover[value="Years"]) {
  --width: 130px;
  --padding: 1px;
  top: 26px;
  position: absolute;
}
</style>
