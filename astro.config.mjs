// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],

  server: {
    allowedHosts: true,
  },

  vite: {
    server: {
      allowedHosts: true,
    },
  },

  adapter: node({
    mode: 'standalone',
  }),
});