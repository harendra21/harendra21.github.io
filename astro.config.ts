import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://harendra21.github.io' : 'http://localhost:4321',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sentry({
      dsn: "https://14c91b06993928129521a995bb7220c0@o514513.ingest.us.sentry.io/4507979262590977",
      sourceMapsUploadOptions: {
        project: "portfolio",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  base: '',

})
