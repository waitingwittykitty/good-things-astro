import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://good-things-astro.pages.dev/",
  server: {
    host: true,
    port: 3000,
  },
  integrations: [
    vue({
      template: {
        transformAssetUrls: false,
      },
    }),
    image(),
  ],
});
