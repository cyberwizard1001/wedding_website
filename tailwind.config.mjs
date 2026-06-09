/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EDD8',
        'cream-light': '#FAF5EC',
        'cream-dark': '#EDE0C4',
        maroon: '#8B3A2A',
        'maroon-dark': '#5C2418',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        brown: '#3D2314',
        'brown-mid': '#6B4C3B',
        'brown-light': '#9C8B7A',
        teal: '#4A8C8C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'texture': "url('/texture.svg')",
      },
    },
  },
  plugins: [],
};
