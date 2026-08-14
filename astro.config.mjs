import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aether-astro-theme.netlify.app/',
  integrations: [tailwind(), react(), sitemap()],
  server: {
    host: true, // or replace `true` with a specific IP string, e.g. '192.168.1.50'
  },
});
