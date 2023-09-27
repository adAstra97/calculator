/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'repeat-4-6rem': 'repeat(4, 6rem)'
      },
      gridTemplateRows: {
        '6-rows': 'minmax(7rem, auto) repeat(5, 6rem)',
      }
    },
  },
  plugins: [],
}