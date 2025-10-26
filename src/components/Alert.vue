<template>
  <span v-if="conditionResult">
    <ion-row
      :style="
        'border-radius: 5px; margin-top:10px; margin-bottom:10px; background-color:' +
        (conditionResult.backgroundColor || config.backgroundColor || '#f0f0f0')
      "
    >
      <span class="position_content alert_content">
        <ion-icon
          slot="start"
          :icon="conditionResult.icon || config.icon"
          aria-hidden="true"
        ></ion-icon>
        <span
          :style="
            'color:' +
            (conditionResult.textColor || config.textColor || '#000') +
            '; font-weight:600; margin: 0px 20px;'
          "
        >
          {{ conditionResult.index || config.index }}
        </span>
        <span
          :style="
            'color:' +
            (conditionResult.textColor || config.textColor || '#000') +
            ';'
          "
        >
          {{ conditionResult.value || conditionResult.message || config.value }}
        </span>
      </span>
    </ion-row>
  </span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import type { AlertFieldConfig } from "../interfaces/StandardFormInterfaces/AlertFieldConfig";

const props = defineProps<{
  config: AlertFieldConfig;
  allFormValues?: any;
}>();

const conditionResult = ref<any>(null);

// Function to evaluate the condition
const evaluateCondition = async () => {
  if (props.config.condition && typeof props.config.condition === "function") {
    try {
      const result = await props.config.condition(props.allFormValues ?? []);
      conditionResult.value = result;
    } catch (error) {
      console.error("Error evaluating alert condition:", error);
      conditionResult.value = null;
    }
  } else {
    // If no condition, show the alert with default config
    conditionResult.value = props.config;
  }
};

// Watch for changes in form values and re-evaluate condition
watch(
  () => props.allFormValues,
  async () => {
    await evaluateCondition();
  },
  { deep: true }
);

// Evaluate condition on mount
onMounted(async () => {
  await evaluateCondition();
});
</script>

<style scoped>
.alert_content {
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
