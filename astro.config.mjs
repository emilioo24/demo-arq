// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://emilioo24.github.io',
  base: '/fernanda-galantini',
  vite: { plugins: [tailwindcss()] },
});
