import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  vite: {
    resolve: {
      alias: {
        '$components': '/src/components',
        '$layouts': '/src/layouts',
        '$utils': '/src/utils',
      }
    }
  }
});