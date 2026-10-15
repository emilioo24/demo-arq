// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://emilioo24.github.io',
  base: '/demo-arq',
  vite: { plugins: [tailwindcss()] },
});
