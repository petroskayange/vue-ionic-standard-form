<template>
    <div class="illustration-card">
        <div v-if="config.category || config.title" class="illustration-header" :style="headerStyle">
            <h3 v-if="config.title" class="illustration-title">{{ config.title }}</h3>
        </div>
        <div class="illustration-image-frame" :style="frameStyle">
            <img
                :src="config.imageSrc"
                :alt="config.imageAlt || config.title || config.category || 'illustration'"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
            />
        </div>
        <div v-if="config.caption || config.description" class="illustration-footer" :style="footerStyle">
            <p v-if="config.caption" class="illustration-caption">{{ config.caption }}</p>
            <p v-if="config.description" class="illustration-description">{{ config.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IllustrationFieldConfig } from "../interfaces/StandardFormInterfaces/IllustrationInterfaces";

const props = defineProps<{
    config: IllustrationFieldConfig;
}>();

const headerStyle = computed(() => ({
    ...(props.config.headerBackgroundColor && { background: props.config.headerBackgroundColor }),
}));

const frameStyle = computed(() => ({
    ...(props.config.frameBorderColor && { borderColor: props.config.frameBorderColor }),
    ...(props.config.frameBorderWidth && { borderWidth: props.config.frameBorderWidth }),
}));

const footerStyle = computed(() => ({
    ...(props.config.footerBackgroundColor && { background: props.config.footerBackgroundColor }),
}));
</script>

<style scoped>
.illustration-card {
    border-radius: 0;
    border: none;
    box-shadow: none;
    overflow: hidden;
    background: #ffffff;
    width: 100%;
    margin-bottom: 10px;
}

.illustration-header {
    margin-bottom: 1rem;
    background-color: #FEDF89;
    padding: 10px 20px;
}

.illustration-category {
    margin: 0 0 4px;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 500;
    color: #333333;
    line-height: 1.2;
}

.illustration-title {
    margin: 0;
    font-size: var(--mahis-text-sm, 0.875rem);
    font-weight: 400;
    color: #333333;
    line-height: 1.3;
}

.illustration-image-frame {
    border-radius: 0;
    padding: 10px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    margin: 0;
}

.illustration-image-frame img {
    width: 100%;
    height: auto;
    border-radius: 0;
    display: block;
    object-fit: cover;
}

.illustration-footer {
    margin: 0;
    padding: 12px 20px;
}

.illustration-caption {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #666666;
    margin: 0 0 4px;
}

.illustration-description {
    font-size: var(--mahis-text-sm, 0.875rem);
    color: #666666;
    margin: 0;
}
</style>
