<template>
    <div class="list-selection-field" :class="{ nested: nestedLevel > 0 }">
        <div v-if="config.header && config.titleStyle !== 'tonal'" class="field-header">
            <h3>
                {{ config.header }}
                <span class="required" v-if="showRequiredAsterisk">*</span>
            </h3>
        </div>

        <div v-if="config.titleStyle === 'tonal'" class="field-header-tonal">
            <h5 class="tonal-title">
                {{ config.header }}
                <span class="required" v-if="showRequiredAsterisk">*</span>
            </h5>
            <p v-if="config.subtitle" class="tonal-subtitle">{{ config.subtitle }}</p>
        </div>

        <div v-if="config.helperText" class="helper-text">
            <template v-if="Array.isArray(config.helperText)">
                <div v-for="(line, idx) in config.helperText" :key="idx" class="helper-line">
                    {{ line }}
                </div>
            </template>
            <template v-else>
                {{ config.helperText }}
            </template>
        </div>

        <ion-list class="selection-list" :class="{ 'center-options': config.centerOptions, 'shadow-options': config.shadowOptions }">
            <div v-for="(option, index) in config.options" :key="index">
                <ion-item
                    button
                    :detail="false"
                    :disabled="option.disabled"
                    @click="handleSelection(option)"
                    :class="{
                        selected: isSelected(option.value),
                        disabled: option.disabled,
                    }"
                    class="selection-item"
                >
                    <ion-label>
                        <h3 class="option-label">{{ option.label }}</h3>
                        <p v-if="option.description" class="option-description">{{ option.description }}</p>
                    </ion-label>

                    <span
                        v-if="config.showSelectionIndicator !== false"
                        slot="end"
                        class="selection-indicator"
                        :class="{
                            checked: isSelected(option.value),
                            multiple: selectionType === 'multiple',
                        }"
                        aria-hidden="true"
                    >
                        <span v-if="isSelected(option.value) && selectionType === 'single'" class="selection-indicator-dot"></span>
                        <span v-else-if="isSelected(option.value)" class="selection-indicator-check">✔</span>
                    </span>
                    <span
                        v-else-if="config.showCheckmark !== false && isSelected(option.value)"
                        slot="end"
                        class="checkmark"
                        aria-hidden="true"
                        >✔</span
                    >
                </ion-item>

                <div v-if="option.children && isSelected(option.value)" class="nested-container">
                    <ListSelectionField
                        :config="option.children"
                        :allFormValues="allFormValues"
                        :modelValue="getChildModelValue(option)"
                        @update:modelValue="(v) => setChildValue(option.children, v)"
                        @field-changed="forwardFieldChanged"
                        :nestedLevel="nestedLevel + 1"
                    />
                </div>
            </div>
        </ion-list>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "ListSelectionField" });

import { ref, computed, watch, PropType, reactive } from "vue";
import { IonList, IonItem, IonLabel } from "@ionic/vue";
import { ListSelectionFieldConfig } from "../interfaces/StandardFormInterfaces/ListSelectionFieldConfig";

type OptionWithChildren = {
    label: string;
    value: string | number | boolean;
    description?: string;
    disabled?: boolean;
    children?: ListSelectionFieldConfig;
};

const props = defineProps({
    config: {
        type: Object as PropType<ListSelectionFieldConfig & { options: OptionWithChildren[] }>,
        required: true,
    },
    allFormValues: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({}),
    },
    modelValue: {
        type: [String, Number, Boolean, Array] as PropType<string | number | boolean | (string | number | boolean)[]>,
        default: null,
    },
    nestedLevel: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits(["update:modelValue", "change", "field-changed"]);

const internalValue = ref<any>(props.modelValue);

// store nested values by field name (e.g. methodOfFeeding)
const childValues = reactive<Record<string, any>>({});

// Sync internal value with prop changes
watch(
    () => props.modelValue,
    (newValue) => {
        internalValue.value = newValue;
    },
    { immediate: true }
);

// Sync internal value from parent form values if present (StandardForm passes allFormValues)
watch(
    () => (props.config?.name ? (props.allFormValues as any)?.[props.config.name] : undefined),
    (newValue) => {
        const fieldName = props.config?.name;
        if (!fieldName) return;
        if (Object.prototype.hasOwnProperty.call(props.allFormValues || {}, fieldName)) {
            internalValue.value = newValue;
        }
    },
    { immediate: true, deep: true }
);

const selectionType = computed(() => props.config.type || "single");
const showRequiredAsterisk = computed(() => {
    if (typeof props.config.validation === "function") {
        const emptyValue = selectionType.value === "multiple" ? [] : "";
        return props.config.validation(emptyValue, props.allFormValues) != null;
    }

    return props.config.allowDeselect === false;
});

const isSelected = (value: string | number | boolean): boolean => {
    if (selectionType.value === "multiple") {
        return Array.isArray(internalValue.value) && internalValue.value.includes(value);
    }
    return internalValue.value === value;
};

function clearChildIfNeeded(option: OptionWithChildren) {
    if (!option.children?.name) return;
    const childName = option.children.name;
    childValues[childName] = null;

    // notify parent form (StandardForm) so it clears allFormValues[childName]
    emit("field-changed", {
        fieldName: childName,
        value: null,
        config: option.children,
    });
}

const handleSelection = (option: OptionWithChildren) => {
    if (option.disabled) return;

    const exclusiveValues = props.config.optionsToDiselectOthersSelections ?? [];
    const isExclusive = exclusiveValues.includes(String(option.value));

    let newValue: any;

    if (selectionType.value === "multiple") {
        let currentArray = Array.isArray(internalValue.value) ? [...internalValue.value] : [];

        if (isExclusive) {
            const alreadySelected = currentArray.includes(option.value);
            if (alreadySelected) {
                if (props.config.allowDeselect === false) return;
                currentArray = currentArray.filter((v) => v !== option.value);
                newValue = currentArray;
            } else {
                newValue = [option.value];
            }
        } else {
            currentArray = currentArray.filter((v) => !exclusiveValues.includes(v));
            const idx = currentArray.indexOf(option.value);

            if (idx > -1) {
                // deselect
                if (props.config.allowDeselect === false) return;
                currentArray.splice(idx, 1);
                clearChildIfNeeded(option); // ✅ clear nested selection when parent is deselected
            } else {
                currentArray.push(option.value);
            }

            newValue = currentArray;
        }
    } else {
        if (internalValue.value === option.value) {
            if (props.config.allowDeselect === false) return;
            newValue = null;
            clearChildIfNeeded(option);
        } else {
            newValue = option.value;
        }
    }

    internalValue.value = newValue;
    emit("update:modelValue", newValue);
    emit("change", newValue);

    emit("field-changed", {
        fieldName: props.config.name,
        value: newValue,
        config: props.config,
    });

    if (props.config.onChange) {
        props.config.onChange(newValue);
    }
};

function setChildValue(childConfig: ListSelectionFieldConfig | undefined, value: any) {
    const childName = childConfig?.name;
    if (!childName) return;
    childValues[childName] = value;
}

function getChildModelValue(option: OptionWithChildren) {
    const name = option.children?.name;
    if (!name) return null;
    if (Object.prototype.hasOwnProperty.call(props.allFormValues || {}, name)) {
        return (props.allFormValues as any)[name];
    }
    return childValues[name] ?? null;
}

function forwardFieldChanged(payload: any) {
    // bubble nested field-changed upward to StandardForm
    emit("field-changed", payload);
}

defineExpose({
    getValue: () => internalValue.value,
    setValue: (value: any) => {
        internalValue.value = value;
        emit("update:modelValue", value);
    },
    validate: () => {
        const validateConfig = (config: ListSelectionFieldConfig & { options: OptionWithChildren[] }, value: any): string | null => {
            if (config.validation && typeof config.validation === "function") {
                return config.validation(value, props.allFormValues);
            }

            if (config.allowDeselect === false) {
                const type = config.type || "single";
                if (type === "multiple") {
                    if (!Array.isArray(value) || value.length === 0) {
                        const label = config.header || "this field";
                        return `Select at least one option for ${label}`;
                    }
                } else {
                    if (value === null || value === undefined || value === "") {
                        const label = config.header || "this field";
                        return `Select an option for ${label}`;
                    }
                }
            }

            const type = config.type || "single";
            const isValueSelected = (optionValue: any) => {
                if (type === "multiple") {
                    return Array.isArray(value) && value.includes(optionValue);
                }
                return value === optionValue;
            };

            for (const option of config.options || []) {
                if (!option?.children) continue;
                if (!isValueSelected(option.value)) continue;

                const childName = option.children.name;
                const childValue = childName ? (props.allFormValues as any)?.[childName] : null;
                const resolvedChildValue = childValue !== undefined ? childValue : getChildModelValue(option);

                const childError = validateConfig(option.children as any, resolvedChildValue);
                if (childError) return childError;
            }

            return null;
        };

        return validateConfig(props.config as any, internalValue.value);
    },
});
</script>

<style scoped>
.list-selection-field {
    width: 100%;
    padding: 0px;
}

.field-header h3 {
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 550;
    color: #00190e;
    margin: 0 0 0.75rem 0;
}

.field-header-tonal {
    margin-bottom: 1rem;
    background-color: #fedf89;
    padding: 10px 20px;
}

.tonal-title {
    color: #000;
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    line-height: 1.3;
}

.tonal-subtitle {
    color: #453708;
    font-weight: 400;
    font-size: var(--mahis-text-sm, 0.875rem);
    margin: 4px 0 0 0;
    line-height: 1.4;
    white-space: pre-line;
}

.helper-text {
    font-size: var(--mahis-text-md, 1rem);
    color: #636363;
    margin: 0.75rem;
}

.helper-line {
    margin-bottom: 0.25rem;
}

.helper-line:last-child {
    margin-bottom: 0;
}

.nested-container {
    margin-left: 16px;
    margin-top: 10px;
    padding-left: 10px;
}

.list-selection-field.nested .field-header h3 {
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    opacity: 0.75;
}

.selection-list {
    background: transparent;
    padding: 0;
}

.selection-list.center-options .selection-item ion-label {
    text-align: center;
}

.selection-list.shadow-options .selection-item {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
    --border-radius: 8px;
}

.selection-list.shadow-options .selection-item:last-child {
    margin-bottom: 0;
}

.selection-item {
    --background: var(--ion-color-light);
    --border-radius: 2px;
    --padding-start: 16px;
    --padding-end: 16px;
    --inner-padding-end: 0;
    --border-width: 0 0 1px 0;
    --border-style: dotted;
    --border-color: #ececec;
    --ripple-color: transparent;
    --background-focused: transparent;
    --background-activated: transparent;
    --background-hover: var(--ion-color-light-shade);
    transition: all 0.2s ease;
}

.selection-item:last-child {
    --border-width: 0;
}

.selection-item:hover:not(.disabled) {
    cursor: pointer;
}

.selection-item.selected {
    --background: #ddeedd;
    --background-hover: #ddeedd;
    --background-focused: #ddeedd;
    --background-activated: #ddeedd;
    border-color: transparent;
}

.selection-item.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.option-label {
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 400;
    color: var(--ion-color-dark);
    margin: 0;
}

.option-description {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: var(--ion-color-medium);
    margin: 0.25rem 0 0 0;
}

.checkmark {
    color: #1b6b2a;
    font-weight: bold;
    font-size: var(--mahis-text-lg, 1.125rem);
    margin-left: 10px;
}

.selection-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    margin-left: 14px;
    border: 2px solid #667085;
    border-radius: 50%;
    background: #fff;
    transition:
        border-color 0.15s ease,
        box-shadow 0.15s ease;
}

.selection-indicator.checked {
    border-color: #1b6b2a;
    box-shadow: 0 0 0 2px rgba(27, 107, 42, 0.12);
}

.selection-indicator.multiple {
    border-radius: 5px;
}

.selection-indicator.multiple.checked {
    border-color: #1b6b2a;
    background: #1b6b2a;
}

.selection-indicator-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1b6b2a;
}

.selection-indicator-check {
    color: #fff;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 700;
    line-height: 1;
}

.required {
    color: #b42318;
}
</style>
