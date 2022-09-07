import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      include: [
        /\.[tj]s?$/, // .ts, .js
        /\.vue$/, // .vue
      ],
      dts: "types/generated/auto-imports.d.ts",
      imports: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
