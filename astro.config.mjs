import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://good-things-astro.pages.dev/",
  server: {
    host: true,
    port: 3000,
  },
  integrations: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
  ],
});
