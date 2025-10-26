import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VueIonicStandardForm",
      fileName: (format) => `vue-ionic-standard-form.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "@ionic/vue"],
      output: {
        globals: {
          vue: "Vue",
          "@ionic/vue": "IonicVue",
        },
      },
    },
  },
});
