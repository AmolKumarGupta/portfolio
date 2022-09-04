/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        background: {
          '0%': { backgroundColor:'rgb(207 250 254)' },
          '100%': { backgroundColor:'rgb(254 249 195)' },
        }
      },
      animation: {
        background: 'background 3s infinite alternate'
      }
    },
  },
  plugins: [],
}
