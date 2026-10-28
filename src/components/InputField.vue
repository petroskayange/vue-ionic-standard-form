<template>
    <div class="input-wrapper" :class="[modeClass, { 'has-padding': config.padding === 'true' || config.padding === true }]">
        <div class="field-header">
            <h6 v-if="config.header" :class="config.bold">
                {{ config.header }}
                <span class="required" v-if="config.validation?.('', allFormValues) != null">*</span>
            </h6>
        </div>

        <div :style="{ width: config.width || '100%', position: 'relative' }">
            <ion-input
                v-model="inputValue"
                @ionBlur="handleBlur"
                @ionInput="handleInput"
                @ionChange="handleChange"
                @click="handleClick"
                @keydown="handleKeydown"
                fill="outline"
                :type="(config.type || 'text') as any"
                :placeholder="config.placeholder"
                :inputmode="(config.inputMode || (config.type === 'number' ? 'numeric' : 'text')) as any"
                :autocapitalize="config.capitalizeFirstLetter ? 'words' : 'sentences'"
                :pattern="config.pattern"
                :min="config.min != null ? String(config.min) : undefined"
                :max="config.max != null ? String(config.max) : undefined"
                :step="config.step != null ? String(config.step) : undefined"
                :disabled="isDisabled"
                :class="['custom-input', { error: hasError }]"
                :style="{ minHeight: (config.minHeight || (mode === 'neonatal' ? 56 : 56)) + 'px' }"
            >
                <ion-label v-if="config.icon || config.imageIcon || config.leftText" slot="start" class="start-content">
                    <ion-icon v-if="config.icon" :icon="config.icon" />
                    <img v-if="config.imageIcon" :src="config.imageIcon" class="image-icon" />
                    <span v-if="config.leftText" class="left-text">{{ config.leftText }}</span>
                </ion-label>

                <ion-label v-if="config.unitOptions || config.unit || config.rightIcon || config.showStepperControls" slot="end" class="end-content">
                    <div v-if="config.showStepperControls" class="stepper-controls">
                        <button type="button" class="stepper-button" aria-label="Increase value" @click.stop.prevent="adjustNumberValue(1)">
                            <ion-icon :icon="chevronUpOutline" />
                        </button>
                        <button type="button" class="stepper-button" aria-label="Decrease value" @click.stop.prevent="adjustNumberValue(-1)">
                            <ion-icon :icon="chevronDownOutline" />
                        </button>
                    </div>

                    <ion-icon v-if="config.rightIcon && !config.unitOptions" :icon="config.rightIcon" />
                    <span v-if="config.unit && !config.unitOptions" class="static-unit">{{ config.unit }}</span>

                    <!-- Custom Unit Selector Trigger -->
                    <div
                        v-if="config.unitOptions"
                        class="custom-unit-selector"
                        :class="{ error: hasUnitError, active: isUnitDropdownOpen }"
                        @click.stop.prevent="toggleUnitDropdown"
                        ref="unitSelectorRef"
                    >
                        <span class="selected-unit-text">
                            {{ selectedUnitLabel || config.unitPlaceholder || "Select" }}
                        </span>
                        <ion-icon :icon="chevronDownOutline" class="dropdown-icon" />
                    </div>
                </ion-label>

                <ion-button v-if="config.actionButton?.show" slot="end" @click="handleActionClick" size="small">
                    <ion-icon v-if="config.actionButton.icon" :icon="config.actionButton.icon" slot="start" />
                    {{ config.actionButton.text }}
                </ion-button>
            </ion-input>

            <!-- Custom Dropdown OUTSIDE ion-input -->
            <Teleport to="body">
                <div
                    class="unit-dropdown-menu"
                    ref="dropdownRef"
                    :style="{
                        ...dropdownStyle,
                        display: isUnitDropdownOpen && config.unitOptions ? 'block' : 'none',
                    }"
                >
                    <div
                        v-for="unitOption in config.unitOptions"
                        :key="unitOption.value"
                        class="unit-option"
                        :class="{ selected: selectedUnit === unitOption.value }"
                        @click.stop="selectUnit(unitOption.value)"
                    >
                        <span>{{ unitOption.label }}</span>
                        <ion-icon v-if="selectedUnit === unitOption.value" :icon="checkmarkOutline" class="check-icon" />
                    </div>
                </div>
            </Teleport>

            <ion-note v-if="errorMessage && showValidation" class="error-note">
                {{ errorMessage }}
            </ion-note>

            <ion-note v-if="unitErrorMessage && isUnitTouched" class="error-note unit-error-note">
                {{ unitErrorMessage }}
            </ion-note>
        </div>

        <!-- Backdrop for dropdown -->
        <div v-if="isUnitDropdownOpen" class="dropdown-backdrop" @click="closeUnitDropdown"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { IonInput, IonButton, IonLabel, IonIcon, IonNote } from "@ionic/vue";
import { chevronDownOutline, chevronUpOutline, checkmarkOutline } from "ionicons/icons";
import type { InputCustomEvent } from "@ionic/vue";
import type { InputFieldConfig } from "../interfaces/StandardFormInterfaces/InputFieldConfig";
import { normalizePersonName } from "../utils/nameFormatting";

const props = defineProps<{
    config: InputFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>();

const emit = defineEmits(["update:value", "field-changed", "update:unit"]);

const mode = computed(() => props.config.mode || props.mode || "");
const modeClass = computed(() => (mode.value === "card" || mode.value === "neonatal" ? "neonatal-style" : ""));

const configFieldName = props.config.name || props.config.header || "";
// Fall back to the form's current value so conditional fields that mount late
// (e.g. an "Other" specify input revealed on edit) still show their prefilled value.
const inputValue = ref(props.config.initialValue || props.config.value || props.allFormValues?.[configFieldName] || "");
const selectedUnit = ref(props.config.initialUnit || (props.config.unitOptions ? null : ""));
const isTouched = ref(false);
const isUnitTouched = ref(false);
const isUnitDropdownOpen = ref(false);
const unitSelectorRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref<Record<string, string>>({
    top: "0px",
    left: "0px",
    display: "none",
});
const hasMounted = ref(false);

// Computed property for selected unit label
const selectedUnitLabel = computed(() => {
    if (!selectedUnit.value || !props.config.unitOptions) return "";
    const option = props.config.unitOptions.find((opt) => opt.value === selectedUnit.value);
    return option?.label || "";
});

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
    if (props.config.unitOptions && props.config.initialUnit !== undefined && props.config.initialUnit !== null) {
        emit("update:unit", props.config.initialUnit);
        emit("field-changed", {
            fieldName: `${props.config.name || props.config.header}_unit`,
            value: props.config.initialUnit,
            config: props.config,
        });
    }

    // Add click outside listener
    document.addEventListener("click", handleClickOutside);
    hasMounted.value = true;
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
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
    return props.config.validation?.(inputValue.value, props.allFormValues) || null;
});

// With validateOnBlur, a half-typed value (e.g. "1" on the way to "100") is
// not flagged until the user leaves the field.
const isEditing = ref(false);
const showValidation = computed(() => isTouched.value && !(props.config.validateOnBlur && isEditing.value));

const hasError = computed(() => {
    if (isDisabled.value) return false;
    return props.config.error || (errorMessage.value !== null && showValidation.value);
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

const sanitizeDigitsOnlyValue = (value: unknown) => String(value ?? "").replace(/\D+/g, "");

const syncDigitsOnlyValue = () => {
    if (!props.config.digitsOnly) {
        return;
    }

    const sanitizedValue = sanitizeDigitsOnlyValue(inputValue.value);
    if (sanitizedValue !== String(inputValue.value ?? "")) {
        inputValue.value = sanitizedValue;
    }
};

const handleBlur = (event: InputCustomEvent<FocusEvent>) => {
    isTouched.value = true;
    isEditing.value = false;
    props.config.onBlur?.(inputValue.value, event.detail);
};

const handleInput = (event: Event) => {
    isTouched.value = true;
    isEditing.value = true;
    syncDigitsOnlyValue();
    props.config.onInput?.(inputValue.value, event);
};

const handleChange = async (event: InputCustomEvent<any>) => {
    // For numeric inputs on tablets, ensure we get the correct value
    // by using nextTick to wait for v-model update
    if (props.config.type === "number" || props.config.digitsOnly) {
        await nextTick();
        const target = event.target as any;
        if (target && target.value !== undefined && target.value !== inputValue.value) {
            inputValue.value = target.value;
        }
        syncDigitsOnlyValue();
    }
};

const handleClick = (event: MouseEvent) => {
    props.config.onClick?.(inputValue.value, event);
};

const handleKeydown = (event: KeyboardEvent) => {
    if (props.config.digitsOnly) {
        const allowedControlKeys = new Set([
            "Backspace",
            "Delete",
            "Tab",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "Enter",
            "Escape",
        ]);
        const isShortcut = event.ctrlKey || event.metaKey || event.altKey;
        const isDigitKey = /^[0-9]$/.test(event.key);

        if (!isShortcut && !allowedControlKeys.has(event.key) && !isDigitKey) {
            event.preventDefault();
            return;
        }
    }

    props.config.onKeydown?.(inputValue.value, event);
};

const adjustNumberValue = (direction: 1 | -1) => {
    const currentValue = Number(inputValue.value || 0);
    const stepValue = Number(props.config.step ?? 1) || 1;
    const minValue = props.config.min !== undefined && props.config.min !== null && props.config.min !== "" ? Number(props.config.min) : Number.NaN;
    const maxValue = props.config.max !== undefined && props.config.max !== null && props.config.max !== "" ? Number(props.config.max) : Number.NaN;

    let nextValue = Number.isFinite(currentValue) ? currentValue + direction * stepValue : stepValue;

    if (direction > 0 && !Number.isFinite(currentValue) && Number.isFinite(minValue)) {
        nextValue = minValue;
    }

    if (direction < 0 && !Number.isFinite(currentValue) && Number.isFinite(minValue)) {
        nextValue = minValue;
    }

    if (Number.isFinite(minValue) && nextValue < minValue) {
        nextValue = minValue;
    }

    if (Number.isFinite(maxValue) && nextValue > maxValue) {
        nextValue = maxValue;
    }

    inputValue.value = String(Math.trunc(nextValue));
    isTouched.value = true;
};

const handleActionClick = (event: MouseEvent) => {
    props.config.onActionClick?.(inputValue.value, event, changeValue);
};

const changeValue = (value: any) => {
    inputValue.value = value;
};

const toggleUnitDropdown = async (event?: Event) => {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    isUnitDropdownOpen.value = !isUnitDropdownOpen.value;

    if (isUnitDropdownOpen.value) {
        await nextTick();
        positionDropdown();
    }
};

const positionDropdown = () => {
    if (!unitSelectorRef.value) return;

    const rect = unitSelectorRef.value.getBoundingClientRect();

    // Position dropdown below the selector, aligned to the right
    dropdownStyle.value = {
        top: `${rect.bottom + window.scrollY + 4}px`,
        left: `${rect.right + window.scrollX - 120}px`,
        display: isUnitDropdownOpen.value ? "block" : "none",
    };
};

const closeUnitDropdown = () => {
    isUnitDropdownOpen.value = false;
    isUnitTouched.value = true;
};

const selectUnit = (value: string) => {
    selectedUnit.value = value;
    isUnitTouched.value = true;
    closeUnitDropdown();
};

const handleClickOutside = (event: MouseEvent) => {
    if (
        isUnitDropdownOpen.value &&
        unitSelectorRef.value &&
        !unitSelectorRef.value.contains(event.target as Node) &&
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target as Node)
    ) {
        closeUnitDropdown();
    }
};

watch(isDisabled, (newDisabled) => {
    if (newDisabled) {
        if (inputValue.value) inputValue.value = "";
        if (selectedUnit.value)
            selectedUnit.value = props.config.unitOptions && props.config.unitOptions.length > 0 ? props.config.unitOptions[0].value : null;
    }
});

watch(inputValue, (newValue) => {
    if (props.config.capitalizeFirstLetter) {
        const normalizedValue = normalizePersonName(newValue);
        if (normalizedValue !== String(newValue ?? "")) {
            inputValue.value = normalizedValue;
            return;
        }
    }

    // props.config.onChange?.(newValue);
    emit("update:value", newValue);
    emit("field-changed", {
        fieldName: props.config.name || props.config.header,
        value: newValue,
        config: props.config,
    });
});

watch(selectedUnit, (newUnit, oldUnit) => {
    if (hasMounted.value && props.config.clearValueOnUnitChange && oldUnit && newUnit !== oldUnit && inputValue.value !== "") {
        inputValue.value = "";
        isTouched.value = false;
    }

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
    setValue: (value: any) => {
        inputValue.value = value;
    },
    setUnit: (unit: string | null) => {
        selectedUnit.value = unit;
    },
    isValid: computed(() => isDisabled.value || (errorMessage.value === null && unitErrorMessage.value === null)),
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
    clearError: () => {
        // Clear touched states to hide error messages
        isTouched.value = false;
        isUnitTouched.value = false;
    },
});
</script>

<style scoped>
.input-wrapper {
    position: relative;
}

h6 {
    margin-top: 0;
}

/* Neonatal Style Overrides (Card-like design) */
.neonatal-style {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end; /* All content aligned to the end (right) */
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    gap: 16px;
    transition: all 0.2s ease;
}

.neonatal-style:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.neonatal-style .field-header {
    margin-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
}

.neonatal-style .field-header h6 {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    color: #1f2937;
    line-height: 1.4;
    text-align: left;
}

.neonatal-style > div:nth-child(2) {
    width: 100% !important;
    flex-shrink: 0;
}

.neonatal-style .custom-input {
    --text-align: right;
    font-weight: 500;
}

.neonatal-style .left-text {
    color: #333333;
}

.input-src-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 6px;
    display: inline-block;
}

.required {
    color: red;
}

.start-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.image-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.left-text {
    font-size: var(--mahis-text-md, 1rem);
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
    gap: 6px;
}

.static-unit {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #555;
    padding-right: 5px;
}

.stepper-controls {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
}

.stepper-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 20px;
    border: none;
    border-radius: 4px;
    background: #eef5ef;
    color: var(--ion-color-primary);
    cursor: pointer;
    padding: 0;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.stepper-button:hover {
    background: #dfeee1;
}

.stepper-button:active {
    transform: scale(0.96);
}

.stepper-button ion-icon {
    font-size: 14px;
}

.custom-input {
    --background: #fff;
    --placeholder-font-weight: 600;
    --placeholder-font-size: var(--mahis-text-sm, 0.875rem);
    --placeholder-opacity: 0.7;
    font-size: var(--mahis-text-md, 1rem);
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
    font-size: var(--mahis-text-sm, 0.875rem);
}

/* Custom Unit Selector Styles */
.custom-unit-selector {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    min-width: 60px;
    max-width: 90px;
    height: 30px;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.custom-unit-selector:hover {
    background-color: #f5f5f5;
}

.custom-unit-selector.active {
    background-color: #e3f2fd;
}

.custom-unit-selector.error {
    color: #dc3545;
}

.selected-unit-text {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}

.custom-unit-selector.error .selected-unit-text {
    color: #dc3545;
}

.dropdown-icon {
    font-size: 14px;
    color: #666;
    opacity: 0.8;
    flex-shrink: 0;
    transition: transform 0.2s;
}

.custom-unit-selector.active .dropdown-icon {
    transform: rotate(180deg);
}

.custom-unit-selector.error .dropdown-icon {
    color: #dc3545;
}

.has-padding {
    padding: 20px !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .neonatal-style {
        gap: 12px;
    }

    .neonatal-style .field-header {
        font-size: var(--mahis-text-sm, 0.875rem);
    }
}
</style>

<style>
.unit-dropdown-menu {
    position: absolute;
    min-width: 120px;
    max-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 999999;
    animation: slideDown 0.15s ease-out;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.unit-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #333;
    cursor: pointer;
    transition: background-color 0.15s;
}

.unit-option:hover {
    background-color: #f5f5f5;
}

.unit-option.selected {
    background-color: #e3f2fd;
    color: #1976d2;
    font-weight: 500;
}

.unit-option .check-icon {
    font-size: 16px;
    color: #1976d2;
    flex-shrink: 0;
    margin-left: 8px;
}

/* Backdrop */
.dropdown-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999998;
    background: transparent;
}
</style>
