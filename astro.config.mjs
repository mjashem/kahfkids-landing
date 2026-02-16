// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/kahfkids-landing/',

  // Site configuration for proper absolute URL generation
  site: 'https://mjashem.github.io',

  // Build configuration for static site generation
  output: 'static',

  // Trailing slash configuration
  trailingSlash: 'ignore',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'react-vendor': ['react', 'react-dom'],
          },
        },
        onwarn(warning, warn) {
          if (warning.code === 'DYNAMIC_IMPORT') {
            return;
          }
          warn(warning);
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    server: {
      allowedHosts: ['.coder.kahf.riajul.dev']
    }
    // REMOVED: Don't manually define BASE_URL - Astro handles this
  }
});