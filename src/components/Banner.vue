<template>
    <div
        v-if="conditionResult"
        class="standard-banner"
        :style="{
            backgroundColor: conditionResult.backgroundColor || config.backgroundColor || '#FEDF89',
            color: conditionResult.textColor || config.textColor || '#00190E',
            borderColor: conditionResult.borderColor || config.borderColor || 'transparent',
            'margin-bottom': config.noMargin ? '0px' : '12px',
        }"
    >
        <div class="banner-content">
            <div v-if="conditionResult.iconSrc || config.iconSrc" class="banner-icon-wrap">
                <img :src="conditionResult.iconSrc || config.iconSrc" alt="" class="banner-icon-image" />
            </div>
            <div class="banner-text">
                <template v-if="conditionResult.loading || config.loading">
                    <div v-if="conditionResult.title || config.title" class="banner-title-skeleton shimmer"></div>
                    <div class="banner-message-skeleton shimmer"></div>
                </template>
                <template v-else>
                    <h4 v-if="conditionResult.title || config.title" class="banner-title">{{ conditionResult.title || config.title }}</h4>
                    <p class="banner-message">{{ conditionResult.message || conditionResult.value || config.message || config.value }}</p>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import type { BannerFieldConfig } from "../interfaces/StandardFormInterfaces/BannerFieldConfig";

const props = defineProps<{
    config: BannerFieldConfig;
    allFormValues?: any;
}>();

const conditionResult = ref<any>(null);

const evaluateCondition = async () => {
    if (props.config.condition && typeof props.config.condition === "function") {
        try {
            const result = await props.config.condition(props.allFormValues ?? []);
            conditionResult.value = result;
        } catch (error) {
            console.error("Error evaluating banner condition:", error);
            conditionResult.value = null;
        }
    } else {
        conditionResult.value = props.config;
    }
};

watch(
    () => props.allFormValues,
    async () => {
        await evaluateCondition();
    },
    { deep: true }
);

// Re-run when the field config changes (e.g. BirthDetails swaps the `condition` closure for loading state)
watch(
    () => props.config.condition,
    async () => {
        await evaluateCondition();
    }
);

onMounted(async () => {
    await evaluateCondition();
});
</script>

<style scoped>
.standard-banner {
    padding: 12px 16px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.banner-content {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
}

.banner-text {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.banner-title {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 700;
}

.banner-message {
    margin: 0;
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 500;
    line-height: 1.4;
    white-space: pre-line;
}

.banner-icon-wrap {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.banner-icon-image {
    width: 38px;
    height: 38px;
    object-fit: contain;
}

.banner-title-skeleton,
.banner-message-skeleton {
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.45);
}

.banner-title-skeleton {
    width: 180px;
    height: 18px;
    margin-bottom: 10px;
}

.banner-message-skeleton {
    width: min(320px, 85%);
    height: 22px;
}

.shimmer {
    position: relative;
    overflow: hidden;
}

.shimmer::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    animation: shimmer-slide 1.2s infinite;
}

@keyframes shimmer-slide {
    100% {
        transform: translateX(100%);
    }
}
</style>
