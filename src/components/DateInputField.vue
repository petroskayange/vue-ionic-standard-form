<template>
    <div v-if="shouldShowField" :class="[modeClass, { 'has-padding': config.padding === 'true' || config.padding === true }]">
        <!-- Header -->
        <h6 v-if="config.header" :class="config.bold">
            {{ config.header }}
            <span class="required" v-if="config.validation?.('', allFormValues) != null">*</span>
        </h6>

        <!-- Date Picker -->
        <div :style="{ width: config.width || '100%' }">
            <VueDatePicker
                @date-update="handleDateUpdate"
                auto-apply
                :flow="flow"
                teleport="body"
                vertical
                :enable-time-picker="false"
                :auto-position="true"
                :min-date="config.minDate"
                :max-date="'maxDate' in config ? config.maxDate : HisDate.sessionDate()"
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
                            '--placeholder-font-weight': config.placeholderFontWeight || '600',
                        }"
                    >
                        <!-- Left content -->
                        <ion-label v-if="resolvedIcon || config.leftText" slot="start" class="start-content">
                            <ion-icon v-if="resolvedIcon" :icon="resolvedIcon" />
                            <span v-if="config.leftText" class="left-text">{{ config.leftText }}</span>
                        </ion-label>

                        <!-- Right content -->
                        <ion-label v-if="config.unit || config.rightIcon" slot="end" class="end-content">
                            <ion-icon v-if="config.rightIcon" :icon="config.rightIcon" />
                            <span v-if="config.unit">{{ config.unit }}</span>
                        </ion-label>

                        <!-- Action button -->
                        <ion-button v-if="config.actionButton?.show" slot="end" @click="handleActionClick" size="small">
                            <ion-icon v-if="config.actionButton.icon" :icon="config.actionButton.icon" slot="start" />
                            {{ config.actionButton.text }}
                        </ion-button>
                        <div slot="end" class="end-content-wrapper">
                            <ion-button v-if="resolvedShowTodayButton" @click.stop="setToday" class="today-btn quick-action-btn" fill="clear">
                                Today
                            </ion-button>

                            <ion-label v-if="config.unit || config.rightIcon" class="end-content">
                                <ion-icon v-if="config.rightIcon" :icon="config.rightIcon" />
                                <span v-if="config.unit">{{ config.unit }}</span>
                            </ion-label>
                        </div>
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
import HisDate from "../utils/date";
import { icons } from "../utils/icons";
import type { DateFieldConfig } from "../interfaces/StandardFormInterfaces/DateFieldConfig";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const props = defineProps<{
    config: DateFieldConfig;
    allFormValues: Record<string, any>;
    mode?: string;
}>();

const emit = defineEmits(["update:value", "update:rawValue", "field-changed"]);

// Internal state
const inputValue = ref(props.config.initialValue || props.config.value || "");
const rawDateValue = ref<string | Date | null>(null);
const isTouched = ref(false);
const flow = ref<Array<"year" | "month" | "calendar">>(["year", "month", "calendar"]);

// Standardized visual defaults (can be overridden per field)
const resolvedIcon = computed(() => {
    // If a form explicitly sets icon (including null), respect it
    if (Object.prototype.hasOwnProperty.call(props.config, "icon")) {
        return props.config.icon;
    }
    // Otherwise default to the primary calendar icon used on registration DOB
    return icons.calenderPrimary;
});

const resolvedShowTodayButton = computed(() => {
    // If a form explicitly sets showTodayButton (including false), respect it
    if (Object.prototype.hasOwnProperty.call(props.config, "showTodayButton")) {
        return props.config.showTodayButton;
    }
    // Otherwise show Today by default for consistent UX
    return false;
});

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
    return props.config.validation?.(inputValue.value, props.allFormValues) || null;
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

const setToday = () => {
    const today = new Date();
    const formattedDate = formatDate(today);
    inputValue.value = formattedDate;
    rawDateValue.value = today;
    isTouched.value = true;

    // Emit events
    emit("update:value", formattedDate);
    emit("update:rawValue", today);
    emit("field-changed", {
        fieldName: props.config.name || props.config.header,
        value: formattedDate,
        rawValue: today,
        config: props.config,
    });

    // Call config callbacks
    props.config.onChange?.(formattedDate, today);
};

// Watch for disabled state changes and clear value if disabled
watch(isDisabled, (newDisabled) => {
    if (newDisabled && inputValue.value) {
        inputValue.value = "";
        rawDateValue.value = null;
    }
});

const mode = computed(() => props.config.mode || props.mode || "");
const modeClass = computed(() => (mode.value === "neonatal" || mode.value === "card" ? "neonatal-style" : ""));

// Expose methods for parent access
defineExpose({
    getValue: () => inputValue.value,
    getRawValue: () => rawDateValue.value,
    setValue: (value: string) => (inputValue.value = value),
    setRawValue: (value: string | Date | null) => (rawDateValue.value = value),
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

.quick-action-btn-container {
    margin-bottom: 8px;
    display: flex;
    justify-content: flex-end;
}

.quick-action-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: #2d7a2e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.quick-action-btn:hover {
    background: #246a24;
}

.quick-action-btn ion-icon {
    font-size: 18px;
}

.start-content {
    display: flex;
    align-items: center;
}

.left-text {
    font-size: var(--mahis-text-md, 1rem);
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

/* Neonatal Style Overrides */
.neonatal-style {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    border-radius: 8px;
}

.has-padding {
    padding: 20px !important;
}

.neonatal-style h6 {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    color: #1f2937;
    line-height: 1.4;
    margin-bottom: 12px;
}

.end-content-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.today-btn {
    --color: #2d7a2e;
    --padding-start: 8px;
    --padding-end: 8px;
    font-size: var(--mahis-text-xs, 0.75rem);
    font-weight: 600;
    text-transform: none;
    height: 25px;
}
</style>
