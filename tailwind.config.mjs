/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF3E2',
        'cream-light': '#FDF8EE',
        'cream-dark': '#F0E2BE',
        maroon: '#A8262C',
        'maroon-dark': '#7A1E22',
        gold: '#E0A93A',
        'gold-light': '#F3CE6E',
        brown: '#2B1216',
        'brown-mid': '#6B4C3B',
        'brown-light': '#9C8B7A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'texture': "url('/texture.svg')",
      },
    },
  },
  plugins: [],
};
