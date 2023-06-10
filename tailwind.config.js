/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./demo/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('./src/index.js')],
}

