import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [VitePWA()]
  },
  site: 'https://avidu.me',
  integrations: [sitemap(), prefetch(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), robotsTxt(), sanity({
    projectId: '28xmc0kr',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })]
});