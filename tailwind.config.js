/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'repeat-4-6rem': 'repeat(4, 5rem)'
      },
      gridTemplateRows: {
        '6-rows': 'minmax(7rem, auto) repeat(5, 5rem)',
      },
      boxShadow: {
        'inset': 'inset 0 0 6px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}