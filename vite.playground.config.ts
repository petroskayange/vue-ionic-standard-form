import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vue-ionic-standard-form/",
  plugins: [vue()],
  build: {
    outDir: "playground-dist",
    emptyOutDir: true,
  },
});
