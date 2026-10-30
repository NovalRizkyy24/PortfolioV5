// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Domain production (dipakai untuk sitemap, canonical URL, dan gambar pratinjau link)
  site: 'https://novalrizky24.my.id',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
