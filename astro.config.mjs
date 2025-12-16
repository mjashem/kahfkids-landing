// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/kahfkids-landing/',

  // Site configuration for proper absolute URL generation
  site: 'https://mjashem.github.io/kahfkids-landing/',

  // Build configuration for static site generation
  output: 'static',

  // Ensure trailing slash consistency for GitHub Pages
  trailingSlash: 'never',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],

    // Build optimizations for production
    build: {
      // Enable chunk size warnings
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress warnings about dynamic imports
          if (warning.code === 'DYNAMIC_IMPORT') {
            return;
          }
          warn(warning);
        }
      }
    },

    // Define global constants for build environment
    define: {
      // Ensure the base path is available at build time
      'import.meta.env.ASTRO_SITE': JSON.stringify('https://mjashem.github.io/kahfkids-landing/'),
      'import.meta.env.BASE_URL': JSON.stringify('/kahfkids-landing/')
    }
  }
});