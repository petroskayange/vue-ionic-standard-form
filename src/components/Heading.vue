<template>
  <div
    :style="
      'font-weight:700; width:100%; text-align:' + config['position'] + ';'
    "
    class="item_header"
    v-if="config['name'] != 'null'"
  >
    {{ config["name"] }}
  </div>
</template>
<script setup lang="ts">
import type { HeadingFieldConfig } from "../interfaces/StandardFormInterfaces/ItemHeaderConfig";

const props = defineProps<{
  config: HeadingFieldConfig;
}>();
</script>
<style scoped></style>
