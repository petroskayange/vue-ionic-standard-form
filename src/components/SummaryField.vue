<template>
    <section class="summary-field">
        <div v-if="sections.length" class="summary-card-list">
            <article v-for="section in sections" :key="section.title || 'summary'" class="summary-card">
                <header v-if="section.title" class="summary-card-header">
                    <h4 class="summary-card-title">{{ section.title }}</h4>
                </header>
                <section class="summary-card-body">
                    <div
                        v-for="(row, index) in section.rows"
                        :key="`${row.label || row.value}-${section.title}-${index}`"
                        class="summary-row"
                        :class="{
                            'summary-row-value-only': !row.label,
                            'summary-row-has-detail': row.detail,
                        }"
                    >
                        <span v-if="row.label" class="summary-label">{{ row.label }}</span>
                        <span v-if="row.value" class="summary-value">{{ row.value }}</span>
                        <span v-else-if="row.detail" class="summary-detail">{{ row.detail }}</span>
                        <span v-else-if="!row.label" class="summary-placeholder">
                            {{ config.emptyStateMessage || "No data" }}
                        </span>
                    </div>
                </section>
            </article>
        </div>

        <p v-else class="summary-empty">
            {{ config.emptyStateMessage || "No summary data available yet." }}
        </p>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { SummaryFieldConfig, SummaryFieldRow } from "../interfaces/StandardFormInterfaces/SummaryFieldConfig";

const props = defineProps({
    config: {
        type: Object as PropType<SummaryFieldConfig>,
        required: true,
    },
    allFormValues: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});

const normalizeValue = (value?: string | null): string => {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value).trim();
};

interface SummarySection {
    title: string;
    rows: SummaryFieldRow[];
}

const normalizedRows = computed<SummaryFieldRow[]>(() => {
    const builderRows =
        props.config.builder?.(props.allFormValues) ??
        props.config.summaryRows ??
        [];

    return builderRows.reduce<SummaryFieldRow[]>((acc, row) => {
        if (!row) return acc;

        const normalizedValue = normalizeValue(row.value);
        const normalizedLabel = row.label?.trim() || "";
        const normalizedDetail = row.detail?.trim() || "";

        const shouldDisplay =
            row.alwaysShow ||
            Boolean(normalizedLabel) ||
            Boolean(normalizedValue) ||
            Boolean(normalizedDetail);

        if (!shouldDisplay) {
            return acc;
        }

        acc.push({
            ...row,
            label: normalizedLabel || undefined,
            value: normalizedValue || undefined,
            detail: normalizedDetail || undefined,
        });

        return acc;
    }, []);
});

const sections = computed<SummarySection[]>(() => {
    const sectionMap = new Map<string, SummaryFieldRow[]>();

    normalizedRows.value.forEach((row) => {
        const sectionKey = row.section?.trim() || "";
        if (!sectionMap.has(sectionKey)) {
            sectionMap.set(sectionKey, []);
        }
        sectionMap.get(sectionKey)?.push(row);
    });

    return Array.from(sectionMap, ([title, rows]) => ({
        title,
        rows,
    }));
});
</script>

<style scoped>
.summary-field {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.summary-header .summary-title {
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    margin: 0;
}

.summary-header .summary-subtitle {
    margin: 0.25rem 0 0 0;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: var(--ion-color-medium);
}

.summary-description {
    margin: 0;
    font-size: var(--mahis-text-sm, 0.875rem);
    color: var(--ion-color-medium);
}

.summary-card-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.summary-card {
    background: #ffffff;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    box-shadow: 0 14px 18px rgba(8, 34, 41, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.04);
}

.summary-card-header {
    margin-bottom: 0.35rem;
}

.summary-card-title {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    color: #0c3f1c;
}

.summary-card-body {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: flex-start;
    font-size: var(--mahis-text-md, 1rem);
    color: #0f1f25;
}

.summary-row-value-only {
    justify-content: flex-start;
    font-weight: 500;
}

.summary-label {
    font-size: var(--mahis-text-md, 1rem);
    color: #3e4d57;
}

.summary-value {
    font-weight: 600;
    color: #0f1f25;
    white-space: pre-line;
}

.summary-detail {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #6d7884;
}

.summary-placeholder {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #9eaab7;
}

.summary-empty {
    margin: 0;
    color: var(--ion-color-medium);
    font-size: var(--mahis-text-sm, 0.875rem);
}
</style>
