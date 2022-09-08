import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin as SVGIcons } from "vite-plugin-svg-icons";

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
    Components({
      dirs: ["src/components"],
      dts: "types/generated/components.d.ts",
    }),
    SVGIcons({
      iconDirs: [fileURLToPath(new URL("./src/assets/icons", import.meta.url))],
      customDomId: "svg-icons",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
