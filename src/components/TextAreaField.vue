<template>
    <div>
        <h6 v-if="config.header" :class="config.bold">
            {{ config.header }}
            <span class="required" v-if="config.validation?.('', allFormValues) != null">*</span>
        </h6>

        <div :style="{ width: config.width || '100%' }">
            <ion-textarea
                v-model="textareaValue"
                @ionBlur="handleBlur"
                @ionInput="handleInput"
                @click="handleClick"
                fill="outline"
                :placeholder="config.placeholder"
                :disabled="isDisabled"
                :class="['custom-textarea', { error: hasError }]"
                :rows="config.rows || 4"
                :auto-grow="config.autoGrow !== false"
                :maxlength="config.maxLength"
                :counter="config.showCounter"
            >
                <ion-label v-if="config.icon || config.leftText" slot="start" class="start-content">
                    <ion-icon v-if="config.icon" :icon="config.icon" />
                    <span v-if="config.leftText" class="left-text">{{ config.leftText }}</span>
                </ion-label>

                <ion-label v-if="config.rightIcon" slot="end" class="end-content">
                    <ion-icon :icon="config.rightIcon" />
                </ion-label>

                <ion-button v-if="config.actionButton?.show" slot="end" @click="handleActionClick" size="small">
                    <ion-icon v-if="config.actionButton.icon" :icon="config.actionButton.icon" slot="start" />
                    {{ config.actionButton.text }}
                </ion-button>
            </ion-textarea>

            <ion-note v-if="errorMessage && isTouched" class="error-note">
                {{ errorMessage }}
            </ion-note>

            <ion-note v-if="config.helperText && !hasError" class="helper-note">
                {{ config.helperText }}
            </ion-note>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonTextarea, IonButton, IonLabel, IonIcon, IonNote } from "@ionic/vue";
import type { TextareaCustomEvent } from "@ionic/vue";
import type { TextAreaFieldConfig } from "../interfaces/StandardFormInterfaces/TextAreaFieldConfig";

const props = defineProps<{
    config: TextAreaFieldConfig;
    allFormValues: Record<string, any>;
}>();

const emit = defineEmits(["update:value", "field-changed"]);

const textareaValue = ref(props.config.initialValue || props.config.value || "");
const isTouched = ref(false);

watch(
    () => props.config.initialValue || props.config.value,
    (newValue) => {
        if (newValue !== undefined) textareaValue.value = newValue;
    }
);

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
    return props.config.validation?.(textareaValue.value, props.allFormValues) || null;
});

const hasError = computed(() => {
    if (isDisabled.value) return false;
    return props.config.error || (errorMessage.value !== null && isTouched.value);
});

const handleBlur = (event: TextareaCustomEvent<FocusEvent>) => {
    isTouched.value = true;
    props.config.onBlur?.(textareaValue.value, event.detail);
};

const handleInput = (event: Event) => {
    isTouched.value = true;
    props.config.onInput?.(textareaValue.value, event);
};

const handleClick = (event: MouseEvent) => {
    props.config.onClick?.(textareaValue.value, event);
};

const handleActionClick = (event: MouseEvent) => {
    props.config.onActionClick?.(textareaValue.value, event);
};

watch(isDisabled, (newDisabled) => {
    if (newDisabled && textareaValue.value) {
        textareaValue.value = "";
    }
});

watch(textareaValue, (newValue) => {
    props.config.onChange?.(newValue);
    emit("update:value", newValue);
    emit("field-changed", {
        fieldName: props.config.name || props.config.header,
        value: newValue,
        config: props.config,
    });
});

defineExpose({
    getValue: () => textareaValue.value,
    setValue: (value: any) => (textareaValue.value = value),
    isValid: computed(() => isDisabled.value || errorMessage.value === null),
    validate: () => {
        if (isDisabled.value) return null;
        isTouched.value = true;
        return errorMessage.value;
    },
    shouldShow: shouldShowField,
    markAsTouched: () => {
        isTouched.value = true;
    },
    resetTouched: () => {
        isTouched.value = false;
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
    align-items: flex-start;
    padding-top: 8px;
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
    align-items: flex-start;
    padding-top: 8px;
    min-width: 40px;
}

.custom-textarea {
    --background: #fff;
    --placeholder-font-weight: 600;
    --placeholder-font-size: var(--mahis-text-sm, 0.875rem);
    --placeholder-opacity: 0.7;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    --padding-top: 12px;
    --padding-bottom: 12px;
}

.custom-textarea.error {
    --border-color: #dc3545;
    --border-width: 2px;
}

.error-note {
    text-align: center;
    display: block;
    margin-top: 4px;
    color: #dc3545;
    font-size: var(--mahis-text-sm, 0.875rem);
}

.helper-note {
    text-align: center;
    display: block;
    margin-top: 4px;
    color: #666;
    font-size: var(--mahis-text-xs, 0.75rem);
}
</style>
