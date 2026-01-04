// @ts-check
import { defineConfig } from 'astro/config';

import studiocmsUi from '@studiocms/ui';

// https://astro.build/config
export default defineConfig({
  integrations: [studiocmsUi()]
});