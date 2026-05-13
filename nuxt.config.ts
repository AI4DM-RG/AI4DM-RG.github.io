import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import slugify from 'slugify';

const sessions = JSON.parse(readFileSync(resolve('public/sessions.json'), 'utf-8'));
const sessionRoutes = sessions.map((session: { title: string; session: { date: string } }) => {
  const slug = slugify(session.title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
  return `/sessions/${session.session.date}/${slug}`;
});

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    preference: 'dark',
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  nitro: {
    preset: 'github-pages',
    output: {
      publicDir: 'docs'
    },
    prerender: {
      routes: sessionRoutes
    },
  },
  router: {
    options: {
      hashMode: false
    }
  },
  ssr: true
})
