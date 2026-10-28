<template>
    <div class="yes-no-question-card">
        <div class="question-text">{{ question }}</div>

        <div class="controls-group">
            <div class="radio-group">
                <label class="radio-label" :for="`${uniqueName}-yes`">
                    <input
                        type="radio"
                        class="radio-input"
                        :id="`${uniqueName}-yes`"
                        :name="uniqueName"
                        :checked="normalizedValue === true"
                        @change="handleChange(true)"
                    />
                    <span>Yes</span>
                </label>
                <label class="radio-label" :for="`${uniqueName}-no`">
                    <input
                        type="radio"
                        class="radio-input"
                        :id="`${uniqueName}-no`"
                        :name="uniqueName"
                        :checked="normalizedValue === false"
                        @change="handleChange(false)"
                    />
                    <span>No</span>
                </label>
            </div>

            <button v-if="normalizedValue !== null" @click.stop.prevent="clearSelection" class="clear-button" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                </svg>
                Clear
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    question: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [Boolean, String, null] as unknown as () => boolean | string | null,
        default: null,
    },
    groupId: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["update:modelValue"]);

const uniqueName = computed(() => {
    return props.groupId || `radio-${Math.random().toString(36).substr(2, 9)}`;
});

const normalizedValue = computed(() => {
    if (props.modelValue === null || props.modelValue === undefined) return null;
    if (typeof props.modelValue === "boolean") return props.modelValue;
    if (typeof props.modelValue === "string") {
        const lower = props.modelValue.toLowerCase();
        if (lower === "yes" || lower === "true") return true;
        if (lower === "no" || lower === "false") return false;
    }
    return null;
});

const handleChange = (value: boolean) => {
    emit("update:modelValue", value);
};

const clearSelection = () => {
    emit("update:modelValue", null);
};
</script>

<style scoped>
.yes-no-question-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ececec;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
}

.yes-no-question-card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.question-text {
    color: #1f2937;
    font-weight: 400;
    font-size: var(--mahis-text-md, 1rem);
    margin-right: 20px;
    flex: 1;
}

.controls-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.radio-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #4b5563;
    white-space: nowrap;
    gap: 8px;
    font-size: var(--mahis-text-sm, 0.875rem);
    transition: color 0.2s;
}

.radio-label:hover {
    color: #1f2937;
}

.radio-input {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #d1d5db;
    background-color: #ffffff;
    background-repeat: no-repeat;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: border-color 0.2s ease, background-image 0.2s ease, box-shadow 0.2s ease;
    color-scheme: light;
}

.radio-input:checked {
    border-color: var(--ion-color-primary, #3b82f6);
    background-image: radial-gradient(circle at center, var(--ion-color-primary, #3b82f6) 45%, transparent 47%);
}

.radio-input:focus-visible {
    outline: 2px solid rgba(59, 130, 246, 0.35);
    outline-offset: 2px;
}

.radio-input:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.clear-button {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: #fee2e2;
    cursor: pointer;
    color: #dc2626;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #fecaca;
    white-space: nowrap;
    transition: all 0.2s;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
}

.clear-button:hover {
    background-color: #fecaca;
    border-color: #fca5a5;
}

.clear-button:active {
    background-color: #fca5a5;
    transform: scale(0.98);
}

.clear-button svg {
    flex-shrink: 0;
}
</style>
