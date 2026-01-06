// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';

import studiocmsUi from '@studiocms/ui';

// @ts-ignore
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [studiocmsUi()],
  adapter: cloudflare({
     imageService: 'passthrough'
  })
});