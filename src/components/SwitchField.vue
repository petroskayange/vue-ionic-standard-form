<!-- SwitchField.vue -->
<template>
    <div v-if="shouldShowField" class="switch-field-wrapper" :style="{ width: config.width || '100%' }">
        <div class="switch-inline-row">
            <!-- Toggle: LEFT (using @vueform/toggle) -->
            <Toggle
                class="toggle-green"
                v-model="isChecked"
                :offLabel="config.offLabel || 'No'"
                :onLabel="config.onLabel || 'Yes'"
                :disabled="isDisabled"
                @change="handleToggleChange"
            />

            <!-- Label + Required -->
            <div class="switch-inline-labels">
                <span v-if="config.prefixText" class="switch-prefix"> ({{ config.prefixText }}) </span>

                <span class="switch-main-label">
                    {{ config.label || config.header }}
                </span>

                <span v-if="isRequired" class="required"> * </span>
            </div>

            <!-- Inline Clear Button -->
            <button
                v-if="config.showClearButton && selectedValue !== null"
                type="button"
                class="clear-button-inline"
                @click="clearSelection"
                :disabled="isDisabled"
            >
                <ion-icon :icon="closeIcon" />
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

        <!-- Bottom clear button -->
        <div v-if="config.showClearButtonBottom && selectedValue !== null" class="clear-section">
            <button type="button" class="clear-button-bottom" @click="clearSelection" :disabled="isDisabled">
                <ion-icon :icon="closeIcon" />
                Clear Selection
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonIcon, IonNote } from "@ionic/vue";
import { close as closeIcon } from "ionicons/icons";
import Toggle from "@vueform/toggle";
import type { SwitchFieldConfig } from "../interfaces/StandardFormInterfaces/SwitchFieldConfig";

const props = defineProps<{
    config: SwitchFieldConfig;
    allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed", "cleared"]);

const selectedValue = ref<any>(getInitialValue());
const isTouched = ref(false);

const trueVal = computed(() => (props.config.trueValue !== undefined ? props.config.trueValue : true));
const falseVal = computed(() => (props.config.falseValue !== undefined ? props.config.falseValue : false));

function getInitialValue() {
    if (props.config.initialValue !== undefined) return props.config.initialValue;
    if (props.config.value !== undefined) return props.config.value;
    return null;
}

watch(
    () => props.config.initialValue ?? props.config.value,
    (newValue) => {
        selectedValue.value = newValue ?? null;
    }
);

// Disabled state
const isDisabled = computed(() => {
    if (typeof props.config.disabled === "boolean") return props.config.disabled;

    if (typeof props.config.disabled === "function") {
        try {
            return props.config.disabled(props.allFormValues);
        } catch (e) {
            console.warn("Disabled function error:", e);
            return false;
        }
    }
    return false;
});

// Visibility
const shouldShowField = computed(() => {
    if (typeof props.config.condition === "function") {
        try {
            return props.config.condition(props.allFormValues);
        } catch (e) {
            console.warn("Condition error:", e);
            return false;
        }
    }
    return true;
});

// Switch state - computed getter/setter for v-model compatibility
const isChecked = computed<boolean>({
    get: () => selectedValue.value === trueVal.value,
    set: (checked: boolean) => {
        // This setter is used by v-model
        if (isDisabled.value) return;
        isTouched.value = true;

        selectedValue.value = checked ? trueVal.value : props.config.allowClearToNull ? null : falseVal.value;

        emitChange();
    },
});

// Validation
const errorMessage = computed(() => {
    if (!shouldShowField.value) return null;
    if (isDisabled.value) return null;
    return props.config.validation?.(selectedValue.value, props.allFormValues) || null;
});

void (computed(() => {
    if (isDisabled.value) return false;
    return props.config.error || (errorMessage.value !== null && isTouched.value);
}));

const isRequired = computed(() => props.config.validation?.("", props.allFormValues) != null);

// Toggle handler
function handleToggleChange(newValue: boolean) {
    if (isDisabled.value) return;
    isTouched.value = true;

    selectedValue.value = newValue ? trueVal.value : props.config.allowClearToNull ? null : falseVal.value;

    // emitChange();

    // Call the blur handler if defined
    props.config.onBlur?.(selectedValue.value, newValue as any);
}

// Clear value
function clearSelection() {
    if (isDisabled.value) return;

    const prev = selectedValue.value;
    selectedValue.value = null;
    isTouched.value = true;

    emitChange();

    emit("cleared", {
        previousValue: prev,
        fieldName: props.config.name || props.config.header,
        config: props.config,
    });

    props.config.onClear?.(prev);
}

function emitChange() {
    const value = selectedValue.value;

    emit("update:value", value);

    emit("field-changed", {
        fieldName: props.config.name || props.config.header,
        value,
        config: props.config,
    });
}

watch(isDisabled, (disabled) => {
    if (disabled && selectedValue.value !== null) {
        selectedValue.value = null;
        emitChange();
    }
});

// Expose API
defineExpose({
    getValue: () => selectedValue.value,
    setValue: (v: any) => (selectedValue.value = v),
    isValid: computed(() => isDisabled.value || errorMessage.value === null),
    validate: () => {
        if (isDisabled.value) return null;
        isTouched.value = true;
        return errorMessage.value;
    },
    shouldShow: shouldShowField,
    clearSelection,
    markAsTouched: () => (isTouched.value = true),
    resetTouched: () => (isTouched.value = false),
    hasSelection: computed(() => selectedValue.value !== null),
    canClear: computed(() => !isDisabled.value && selectedValue.value !== null),
});
</script>

<style scoped>
.required {
    color: red;
}

/* Layout */
.switch-inline-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
}

.switch-inline-labels {
    display: flex;
    align-items: center;
    gap: 4px;
}

/* Toggle styling - matching the green theme from your example */
.toggle-green {
    --toggle-bg-on: #006401;
    --toggle-border-on: #006401;
    --toggle-bg-off: #d1d5db;
    --toggle-border-off: #d1d5db;
    --toggle-width: 4.25rem;
    --toggle-height: 1.75rem;
    --toggle-border: 0.125rem;
    --toggle-font-size: var(--mahis-text-sm, 0.875rem);
}

/* Give the knob some depth so it reads as a handle, not a flat cut-out */
.toggle-green :deep(.toggle-handle) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

/* Error state for toggle */
.switch-field-wrapper:has(.error-note) .toggle-green {
    --toggle-bg-on: #dc3545;
    --toggle-border-on: #dc3545;
    --toggle-bg-off: #f8d7da;
    --toggle-border-off: #f8d7da;
}

/* Inline clear button */
.clear-button-inline {
    background: none;
    border: 1px solid #dc3545;
    color: #dc3545;
    border-radius: 4px;
    padding: 2px 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.clear-button-inline:hover {
    background: #dc3545;
    color: white;
}

.clear-button-inline:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Bottom clear button */
.clear-button-bottom {
    background: none;
    border: 1px solid #dc3545;
    color: #dc3545;
    border-radius: 6px;
    padding: 6px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
}

.clear-button-bottom:hover {
    background: #dc3545;
    color: #fff;
}

.clear-button-bottom:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Error + helper text */
.error-note {
    color: #dc3545;
    margin-top: 4px;
    font-size: var(--mahis-text-sm, 0.875rem);
}

.helper-note {
    color: #666;
    margin-top: 4px;
    font-size: var(--mahis-text-sm, 0.875rem);
}

.switch-main-label {
    font-weight: 500;
    color: #333;
}

.switch-prefix {
    color: #666;
    font-size: var(--mahis-text-sm, 0.875rem);
}
</style>

<style src="@vueform/toggle/themes/default.css"></style>
