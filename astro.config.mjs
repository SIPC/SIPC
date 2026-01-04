// @ts-check
import { defineConfig } from 'astro/config';

import studiocmsUi from '@studiocms/ui';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [studiocmsUi()],
  adapter: cloudflare({
     imageService: 'passthrough'
  })
});