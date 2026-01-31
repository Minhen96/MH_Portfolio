// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({ compat: true }),
    tailwind(),
    sitemap(),
  ],
  site: "https://yapminhen.com",
});