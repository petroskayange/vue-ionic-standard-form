<template>
    <section class="score-field" :class="[`variant-${variant}`]">
        <div class="score-card">
            <p class="score-value">{{ displayValue }}</p>
            <p v-if="config.title" class="score-title">{{ config.title }}</p>
            <p v-if="config.description" class="score-description">{{ config.description }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { ScoreFieldConfig } from "../interfaces/StandardFormInterfaces/ScoreFieldConfig";

const props = defineProps({
    config: {
        type: Object as PropType<ScoreFieldConfig>,
        required: true,
    },
    allFormValues: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});

const variant = computed(() => props.config.variant || "default");

const formatValue = (value: number | string | undefined | null): string => {
    if (value === undefined || value === null || value === "") {
        return props.config.emptyStateMessage || "--";
    }

    if (typeof value === "number") {
        return formatString(value.toString());
    }

    if (typeof value === "string") {
        const trimmed = value.trim();
        if (!trimmed) {
            return props.config.emptyStateMessage || "--";
        }
        return formatString(trimmed);
    }

    return props.config.emptyStateMessage || "--";
};

const formatString = (value: string): string => {
    if (props.config.padTo && /^\d+$/.test(value)) {
        return value.padStart(props.config.padTo, "0");
    }
    return value;
};

const displayValue = computed(() => {
    if (typeof props.config.computeValue === "function") {
        const computedValue = props.config.computeValue(props.allFormValues);
        return formatValue(computedValue as any);
    }

    return formatValue(props.config.value);
});
</script>

<style scoped>
.score-field {
    width: 100%;
}

.score-card {
    padding: 1.75rem 1.25rem;
    border-radius: 12px;
    background: #e7f4ec;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.score-field.variant-warning .score-card {
    background: #fff7e0;
}

.score-field.variant-danger .score-card {
    background: #fdeaea;
}

.score-field.variant-success .score-card {
    background: #e0f3e8;
}

.score-value {
    font-size: var(--mahis-text-xl, 1.25rem);
    margin: 0;
    font-weight: 600;
    color: #0c5a21;
    letter-spacing: 0.06em;
}

.score-title {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    color: #0c1f18;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.score-subtitle {
    margin: 0;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #0c1f18;
    font-weight: 500;
}

.score-description {
    margin: 0;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #4a5a55;
}
</style>
