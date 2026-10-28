<template>
    <div class="infographic-display" :class="[`display-mode-${displayMode}`]">
        <div class="infographic-heading" v-if="headingTitle || headingSubtitle || headingDescription || headingHelperText || headingHelperImage">
            <p v-if="headingTitle" class="infographic-title">{{ headingTitle }}</p>
            <p v-if="headingSubtitle" class="infographic-subtitle">{{ headingSubtitle }}</p>
            <p v-if="headingDescription" class="infographic-description">{{ headingDescription }}</p>
            <div v-if="headingHelperText || headingHelperImage" class="infographic-helper-banner">
                <p v-if="headingHelperText" class="infographic-helper-text">{{ headingHelperText }}</p>
                <img
                    v-if="headingHelperImage"
                    :src="headingHelperImage"
                    alt="Infographic banner"
                    class="infographic-helper-image"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                />
            </div>
        </div>

        <div class="loading-state" v-if="isLoading">
            <ion-spinner name="bubbles"></ion-spinner>
            <p>Loading...</p>
        </div>

        <div class="error-state" v-else-if="error">
            <p>{{ error }}</p>
        </div>

        <template v-else>
            <div v-if="displayItems.length" class="infographic-step-list">
                <article
                    v-for="(item, index) in displayItems"
                    :key="index"
                    class="infographic-step"
                    :class="{
                        'with-image': item.image,
                        'image-only': item.image && !hasBodyContent(item),
                        'variant-summary': cardVariant === 'summary'
                    }"
                >
                    <div v-if="hasBodyContent(item)" class="step-body">
                        <header class="step-header">
                            <h3 v-if="item.title">
                                <span v-if="showStepNumber" class="step-number-inline">{{ index + 1 }}.  </span>
                                <span v-html="item.title"></span>
                            </h3>
                            <p class="step-subtitle" v-if="item.subtitle" v-html="item.subtitle"></p>
                            <p class="step-content" v-if="item.content" v-html="item.content"></p>
                        </header>
                        <div class="step-bullets" v-if="item.bullets?.length">
                            <ul>
                                <li v-for="(bullet, bulletIndex) in item.bullets" :key="bulletIndex" v-html="bullet"></li>
                            </ul>
                        </div>
                        <p class="step-description" v-if="item.description" v-html="item.description"></p>
                        <p class="step-highlight" :class="`type-${item.highlightType || 'info'}`" v-if="item.highlightText" v-html="item.highlightText"></p>
                    </div>
                    <figure class="step-figure" v-if="item.image">
                        <img
                            :src="item.image"
                            :alt="item.title || `Step ${index + 1}`"
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
                        />
                        <figcaption v-if="item.caption" v-html="item.caption"></figcaption>
                    </figure>
                </article>
            </div>
            <div class="infographic-footer" :class="`type-${footerNoteType}`" v-if="footerNote">
                <ion-icon :icon="informationCircleOutline" class="footer-icon"></ion-icon>
                <p v-html="footerNote"></p>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, PropType } from "vue";
import { IonSpinner, IonIcon } from "@ionic/vue";
import { informationCircleOutline } from "ionicons/icons";
import {
    InfographicFieldConfig,
    InfographicData,
    InfographicSectionItem,
} from "../interfaces/StandardFormInterfaces/InfographicFieldConfig";

const props = defineProps({
    config: {
        type: Object as PropType<InfographicFieldConfig>,
        required: true,
    },
    allFormValues: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});

const loadedData = ref<InfographicData | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);

const displayMode = computed(() => props.config.displayMode || "list");
const cardVariant = computed(() => props.config.cardVariant || "default");
const showStepNumber = computed(() => {
    if (typeof props.config.showStepNumber === "boolean") {
        return props.config.showStepNumber;
    }
    return props.config.displayMode !== "visual";
});
const headingTitle = computed(() => loadedData.value?.header || props.config.header || "");
const headingSubtitle = computed(() => loadedData.value?.subtitle || props.config.subtitle || "");
const headingDescription = computed(() => loadedData.value?.description || props.config.description || "");
const headingHelperText = computed(() => loadedData.value?.helperText || props.config.helperText || "");
const headingHelperImage = computed(() => loadedData.value?.helperImage || props.config.helperImage || "");
const footerNote = computed(() => loadedData.value?.footerNote || props.config.footerNote || "");
const footerNoteType = computed(() => loadedData.value?.footerNoteType || props.config.footerNoteType || "info");

const loadData = async () => {
    const data = props.config.infographicData;

    if (typeof data === "object" && data !== null && "key" in data) {
        loadedData.value = data as InfographicData;
        return;
    }

    if (typeof data === "function") {
        isLoading.value = true;
        error.value = null;
        try {
            const result = await Promise.resolve(data());
            loadedData.value = result;
        } catch (err) {
            error.value = "Failed to load infographic data";
            console.error("Error loading infographic data:", err);
        } finally {
            isLoading.value = false;
        }
        return;
    }

    if (typeof data === "string") {
        error.value = "String keys require a dataSource implementation";
        console.warn("Infographic data provided as string key but no dataSource specified");
    }
};

const displayItems = computed<InfographicSectionItem[]>(() => {
    if (!loadedData.value) return [];

    if (loadedData.value.sections?.length) {
        return loadedData.value.sections;
    }

    const labels = loadedData.value.labels || [];
    const values = loadedData.value.values || [];
    const descriptions = loadedData.value.descriptions || [];
    const images = loadedData.value.images || [];

    return labels.map((label, index) => {
        const section: InfographicSectionItem = {
            title: label,
            content: values[index],
            image: images[index],
        };

        const descriptionEntry = descriptions[index];
        if (Array.isArray(descriptionEntry)) {
            section.bullets = descriptionEntry;
        } else if (descriptionEntry) {
            section.description = descriptionEntry;
        }

        return section;
    });
});

const hasBodyContent = (item: InfographicSectionItem) =>
    Boolean(item.title || item.subtitle || item.content || item.bullets?.length || item.description || item.highlightText);

onMounted(() => {
    loadData();
});
</script>

<style scoped>
.infographic-display {
    border-radius: 12px;
}

.infographic-heading {
    text-align: start;
    margin: 0;
}

.infographic-title {
    color: #6f6f6f;
    font-size: var(--mahis-text-lg, 1.125rem);
    font-weight: 500;
    margin: 0;
}

.infographic-subtitle {
    font-size: var(--mahis-text-lg, 1.125rem);
    color: #253227;
    margin: 0;
    font-weight: 600;
    line-height: 1.4;
}

.infographic-description {
    color: #5f6368;
    font-size: var(--mahis-text-md, 1rem);
    margin: 0.35rem 0 0;
}

.infographic-helper-banner {
    background-color: #fff0ad;
    margin-top: 10px;
}

.infographic-helper-text {
    background-color: transparent;
    color: #6f7f3f;
    padding: 16px 20px;
    margin: 0;
    /* instruction text is body copy, same size as the question below it */
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    line-height: 1.4;
    white-space: pre-line;
}

.infographic-helper-image {
    display: block;
    max-width: 100%;
    height: auto;
    max-height: 480px;
    margin: 0 auto;
    object-fit: contain;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    background: #ffffff;
}

.infographic-step-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.infographic-step {
    content-visibility: auto;
    contain-intrinsic-size: auto 520px;
    background-color: #ffffff;
    position: relative;
    padding: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0;
    overflow: hidden;
    border-radius: 8px;
    margin-top: 10px;
}

.infographic-step.variant-summary {
    border-radius: 8px;
    padding: 5px;
    box-shadow: 0 14px 26px rgba(8, 34, 41, 0.08);
}

.infographic-step.variant-summary .step-body {
    padding: 3px 4px;
}

.infographic-step.variant-summary .step-bullets ul {
    padding-left: 1.25rem;
    margin: 0.35rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    list-style-type: decimal;
}

.infographic-step.variant-summary .step-bullets li {
    color: #0f1f25;
}

.infographic-step.with-image {
    gap: 1.25rem;
}

.infographic-step.image-only {
    gap: 0;
}

.step-number {
    width: 48px;
    height: 48px;
    border-radius: 999px;
    color: var(--ion-color-dark);
    font-weight: 700;
    font-size: var(--mahis-text-lg, 1.125rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
}

.step-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 18px 22px 20px;
}

.step-header {
    background-color: transparent;
    padding: 0;
    margin: 0 0 10px 0;
}

.step-header h3 {
    margin: 0;
    font-size: var(--mahis-text-lg, 1.125rem);
    font-weight: 700;
    color: #0e331d;
    line-height: 1.45;
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
}

.step-number-inline {
    font-weight: 700;
    color: #0e331d;
}

.step-subtitle {
    margin: 6px 0 0;
    color: #4e5f53;
    font-weight: 500;
    font-size: var(--mahis-text-md, 1rem);
}

.step-content {
    margin: 12px 0 0;
    color: #5f6368;
    font-weight: 400;
    font-size: var(--mahis-text-md, 1rem);
    line-height: 1.6;
}

.step-bullets ul {
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--ion-color-dark);
    font-size: var(--mahis-text-md, 1rem);
    line-height: 1.5;
}

.step-description {
    margin: 0;
    color: #00190E;
}

.step-highlight {
    margin: 0;
    font-weight: 600;
    color: var(--ion-color-dark);
}

.step-highlight.type-danger {
    color: var(--ion-color-danger);
}

.step-highlight.type-warning {
    color: var(--ion-color-warning);
}

.step-highlight.type-info {
    color: var(--ion-color-primary);
}

.step-figure {
    width: 100%;
    overflow: hidden;
}

.step-figure img {
    width: 100%;
    display: block;
    object-fit: contain;
    max-height: 340px;
    background: #ffffff;
}

.step-figure figcaption {
    font-size: var(--mahis-text-sm, 0.875rem);
    padding: 0.5rem 0.75rem 0.75rem;
}

.infographic-footer {
    background-color: #ffffff;
    border-top: 1px solid #e7e7e7;
    border-radius: 0 0 14px 14px;
    margin-top: 0;
    padding: 16px 20px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-weight: 400;
    color: #5f6368;
    box-shadow: none;
}

.infographic-footer p {
    margin: 0;
    flex: 1;
    font-size: var(--mahis-text-md, 1rem);
    line-height: 1.6;
}

.footer-icon {
    display: none;
}

.infographic-footer.type-danger {
    background-color: rgba(220, 53, 69, 0.08);
    color: #dc3545;
    border-top-color: transparent;
}

.infographic-footer.type-danger .footer-icon {
    color: #dc3545;
}

.infographic-footer.type-warning {
    background-color: rgba(255, 152, 0, 0.1);
    color: #b26b00;
    border-top-color: transparent;
}

.infographic-footer.type-warning .footer-icon {
    color: #b26b00;
}

.infographic-footer.type-info {
    background-color: #ffffff;
    color: #5f6368;
}

.infographic-footer.type-info .footer-icon {
    color: #5f6368;
}

.infographic-footer.type-error {
    background-color: rgba(220, 53, 69, 0.08);
    color: #dc3545;
}

.infographic-footer.type-error .footer-icon {
    color: #dc3545;
}

.loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    gap: 0.75rem;
}

.loading-state ion-spinner {
    width: 40px;
    height: 40px;
    color: var(--ion-color-primary);
}

.loading-state p {
    margin: 0;
    color: var(--ion-color-medium);
    font-size: var(--mahis-text-md, 1rem);
}

.error-state,
.no-data {
    padding: 2rem;
    text-align: center;
    color: var(--ion-color-medium);
}

.error-state {
    color: var(--ion-color-danger);
}

.error-state p,
.no-data p {
    margin: 0;
    font-style: italic;
}

@media (max-width: 768px) {
    .infographic-display {
        padding: 1rem;
    }

    .infographic-step {
        padding: 0;
    }

    .step-body {
        padding: 16px 18px;
    }

    .infographic-heading {
        text-align: center;
    }

    .infographic-title {
        text-align: center;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .infographic-heading {
        text-align: center;
    }

    .infographic-title {
        text-align: center;
    }
}

@media (min-width: 769px) {
    .display-mode-cards .infographic-step.with-image:not(.image-only) {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
        align-items: start;
        gap: 1rem;
    }

    .display-mode-cards .infographic-step.with-image:not(.image-only) .step-body {
        padding-right: 0;
    }

    .display-mode-cards .infographic-step.with-image:not(.image-only) .step-figure {
        padding: 18px 22px 20px 0;
        align-self: stretch;
        display: flex;
        align-items: center;
    }
}
</style>
