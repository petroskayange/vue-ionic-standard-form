<template>
    <div
        v-if="shouldShowField"
        :class="[modeClass, { 'has-padding': config.padding === 'true' || config.padding === true }]"
    >
        <h6 v-if="config.header" :class="config.bold">
            {{ config.header }}
            <span class="required" v-if="config.validation?.('') != null">*</span>
        </h6>

        <div class="datetime-input-wrapper">
            <ion-datetime
                :value="inputValue"
                :display-format="config.displayFormat || 'DD MMM, YYYY HH:mm'"
                presentation="date-time"
                :picker-options="config.pickerOptions"
                :min="config.minDateTime || defaultMin"
                :max="config.maxDateTime || defaultMax"
                :disabled="isDisabled"
                @ionChange="handleDateChange"
                @ionBlur="handleBlur"
            ></ion-datetime>
        </div>

        <ion-note v-if="errorMessage && isTouched" class="error-note">
            {{ errorMessage }}
        </ion-note>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonDatetime, IonNote } from "@ionic/vue";
import HisDate from "../utils/date";
import type { DateTimeFieldConfig } from "../interfaces/StandardFormInterfaces/DateTimeFieldConfig";

const props = defineProps<{
    config: DateTimeFieldConfig | any;
    allFormValues?: Record<string, any>;
    mode?: string | any;
}>();

const emit = defineEmits(["update:value", "update:rawValue", "field-changed"]);

const initial = props.config.initialValue || props.config.value || HisDate.todayDateFormatted();
const inputValue = ref(initial);
const rawDateValue = ref<string | null>(initial || null);
const isTouched = ref(false);

const isDisabled = computed(() => {
    if (typeof props.config.disabled === "boolean") {
        return props.config.disabled;
    }
    if (typeof props.config.disabled === "function") {
        try {
            return props.config.disabled(props.allFormValues || {});
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
            return props.config.condition(props.allFormValues || {});
        } catch (error) {
            console.warn("Condition function error:", error);
            return false;
        }
    }
    return true;
});

const errorMessage = computed(() => {
    if (!shouldShowField.value || isDisabled.value) return null;
    return props.config.validation?.(inputValue.value) || null;
});

const handleDateChange = (event: any) => {
    const value = event?.detail?.value;
    if (value) {
        inputValue.value = value;
        rawDateValue.value = value;
        isTouched.value = true;
        emit("update:value", value);
        emit("update:rawValue", value);
        emit("field-changed", {
            fieldName: props.config.name || props.config.header,
            value,
            rawValue: value,
            config: props.config,
        });
        props.config.onChange?.(value, props.allFormValues);
    }
};

const handleBlur = () => {
    isTouched.value = true;
};

const mode = computed(() => props.config.mode || props.mode || "");
const modeClass = computed(() => (mode.value === "neonatal" || mode.value === "card" ? "neonatal-style" : ""));

const defaultMax = HisDate.todayDateFormatted();
const defaultMin = "";

watch(
    () => props.config.initialValue || props.config.value,
    (newValue) => {
        if (newValue !== undefined && newValue !== inputValue.value) {
            inputValue.value = newValue;
            rawDateValue.value = newValue || null;
        }
    }
);

defineExpose({
    getValue: () => inputValue.value,
    getRawValue: () => rawDateValue.value,
    setValue: (value: string) => {
        inputValue.value = value;
        rawDateValue.value = value;
    },
    shouldShow: shouldShowField,
    validate: () => {
        if (isDisabled.value) return null;
        isTouched.value = true;
        return errorMessage.value;
    },
    markAsTouched: () => {
        isTouched.value = true;
    },
    resetTouched: () => {
        isTouched.value = false;
    },
});
</script>

<style scoped>
.datetime-input-wrapper {
    width: 100%;
}

.datetime-input-wrapper ion-datetime {
    width: 100%;
}

.required {
    color: red;
}

.has-padding {
    padding: 20px !important;
}

.neonatal-style {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: 0;
}

.error-note {
    margin-top: 4px;
    color: #dc3545;
    display: block;
}
</style>
