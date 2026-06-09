import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cyberwizard1001.github.io',
  base: '/wedding_website',
  integrations: [tailwind()],
});
