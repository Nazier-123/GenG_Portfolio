/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'geng-black': '#000000',
        'geng-gold': '#B4945B',
        'geng-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}