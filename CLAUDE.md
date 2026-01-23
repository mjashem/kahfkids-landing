# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kahf Kids Landing Page - A static landing page for a Muslim children's parental control app. Built with Astro for SSR/SSG benefits, using React components for interactive/animated sections.

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build to ./dist/ (removes console/debug in production)
npm run preview      # Preview production build locally
npm run preview:build # Build then preview
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

## Architecture

### Hybrid Component Pattern

This codebase uses Astro + React with a specific pattern:

- **`.astro` components** in `src/components/` are static section wrappers (e.g., `Hero.astro`, `Features.astro`, `Pricing.astro`)
- **`.tsx` components** in `src/components/` contain the animated/interactive content (e.g., `HeroAnimated.tsx`, `FeaturesAnimated.tsx`)
- The Astro components import and render the React components with `client:load` directive for hydration

**When modifying a section:**
- For content/structure changes → edit the `.astro` file
- For animations/interactivity → edit the `.tsx` file
- The `.astro` wrapper typically contains layout/structure, the `.tsx` contains Framer Motion animations

### Entry Point

- [src/pages/index.astro](src/pages/index.astro) - Main page that composes all section components
- [src/layouts/Layout.astro](src/layouts/Layout.astro) - Root layout with SEO meta tags

### Key Sections (in order on page)

1. **Navbar** - Sticky header, OS detection for app store links
2. **Hero** - Main headline with animated phone mockup
3. **MuslimGeneration** - Brand/values section with animated diagram
4. **Ecosystem** - Feature showcase with animated cards
5. **Features** - Detailed features grid
6. **SocialProof** - Testimonials/reviews
7. **Pricing** - Pricing plans
8. **FAQ** - Accordion-style questions
9. **Devices** - Platform compatibility
10. **SafeScreen** - Safety feature showcase
11. **Footer** - Links and social media

## Styling

**TailwindCSS v4** with custom brand colors defined in [tailwind.config.ts](tailwind.config.ts):
- `kahf-accent`: `#E05C41` (primary brand color)
- `kahf-dark`: `#0D1013`
- `kahf-white`: `#FFFFFF`

Font: "Baloo 2" (loaded via Google Fonts in Layout.astro)

Custom animations: `fade-in`, `slide-up`, `stagger`

## Animations

**Framer Motion** is used for all animations. Key patterns:
- `AnimatedSection.tsx` - Base component for scroll-triggered fade-in animations
- `useScrollAnimation` hook pattern for viewport detection
- Stagger children for sequential animations

## Deployment

- **GitHub Pages** via `.github/workflows/deploy.yml`
- **Base path**: `/kahfkids-landing/` (configured in `astro.config.mjs`)
- **Site URL**: `https://mjashem.github.io`
- **Output**: Static (`output: 'static'`)

When deploying to different environments, update `site` and `base` in [astro.config.mjs](astro.config.mjs:9-12).

## Build Configuration

- Terser removes `console.log` and `debugger` in production builds
- Manual chunks for `framer-motion` and `react-vendor` for better caching
- Sharp for image optimization with WebP conversion

## OS Detection

The Navbar component detects iOS/Android to show appropriate app store links. Logic is in `Navbar.astro`.
