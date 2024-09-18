import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'


// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://harendra21.github.io'
    : 'http://localhost:4321',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  base: 'https://github.com/harendra21/harendra21.github.ioyour-repo-name/',
})
