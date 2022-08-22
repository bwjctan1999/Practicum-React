/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGradient: {
          start: '#4A00E0',
          end: '#8E2DE2',
        },
      }
    },
  },
  plugins: [],
}
