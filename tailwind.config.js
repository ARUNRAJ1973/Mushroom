/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#14532d',
        moss: '#4d7c0f',
        earth: '#7c4a2d',
        cream: '#f8fafc',
      },
    },
  },
  plugins: [],
}