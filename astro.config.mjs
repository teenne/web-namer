import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

export default defineConfig({
  server: { port: 4020 },
  // TODO: Update with your production URL
  site: 'https://namer.app',

  integrations: [
    sitemap(),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-light',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // Uncomment to enable i18n
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'nb'],
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
});
