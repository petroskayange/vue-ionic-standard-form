<template>
    <span v-if="conditionResult">
        <ion-row :style="'margin-bottom:' + (config.noMargin ? '0px' : '10px') + '; width: 100%;'">
            <div
                class="alert-warning-box"
                :style="{
                    backgroundColor: conditionResult.backgroundColor || config.backgroundColor || '#f0f0f0',
                    borderColor: conditionResult.textColor || config.textColor || conditionResult.backgroundColor || config.backgroundColor || '#ccc',
                    color: conditionResult.textColor || config.textColor || '#000',
                }"
            >
                <div class="warning-title">
                    <ion-icon
                        :icon="conditionResult.icon || config.icon"
                        aria-hidden="true"
                        class="alert-icon"
                        :style="{ color: conditionResult.textColor || config.textColor || '#000' }"
                    />
                    {{ conditionResult.index || config.index }}
                    <span class="warning-message">
                        {{ conditionResult.value || conditionResult.message || config.value }}
                    </span>
                    <ion-button v-if="conditionResult.action" @click="conditionResult.action()" size="small" :color="conditionResult.actionColor || 'primary'" :disabled="conditionResult.actionDisabled" style="margin-left: 10px;">
                        {{ conditionResult.actionLabel || 'Action' }}
                    </ion-button>
                </div>
            </div>
        </ion-row>
    </span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { IonRow, IonIcon, IonButton } from "@ionic/vue";
import type { AlertFieldConfig } from "../interfaces/StandardFormInterfaces/AlertFieldConfig";

const props = defineProps<{
    config: AlertFieldConfig;
    allFormValues?: any;
}>();

const conditionResult = ref<any>(null);

const evaluateCondition = async () => {
    if (props.config.condition && typeof props.config.condition === "function" && !props.config?.removeConditionAlert) {
        try {
            const result = await props.config.condition(props.allFormValues ?? []);
            conditionResult.value = result;
        } catch (error) {
            console.error("Error evaluating alert condition:", error);
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

onMounted(async () => {
    await evaluateCondition();
});
</script>

<style scoped>
.alert-warning-box {
    padding: 16px;
    margin: 10px 5px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-left: 6px solid;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.warning-title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 800;
    font-size: var(--mahis-text-sm, 0.875rem);
    letter-spacing: 0.5px;
}

.warning-message {
    font-size: var(--mahis-text-md, 1rem);
    font-weight: 600;
    padding-left: 26px;
}

.alert-icon {
    font-size: 18px;
    flex-shrink: 0;
}
</style>
