import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Exact Figma colors
        'kahf-dark': '#0D1013', // Headline/100
        'kahf-white': '#FFFFFF', // BG-White
        'kahf-accent': '#E05C41', // Danger/100
        'kahf-accent-hover': '#C74D34', // Darker shade for hover
        'kahf-accent-light': '#F8EBE8', // Light tint for secondary hover
        'kahf-black': '#000000', // Pure black
      },
      fontFamily: {
        'sans': ['"Baloo 2"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'stagger': 'stagger 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        'container': '1121px',
        'content': '800px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      boxShadow: {
        'cta': '0 4px 15px rgba(224, 92, 65, 0.3)',
        'cta-hover': '0 6px 20px rgba(224, 92, 65, 0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;