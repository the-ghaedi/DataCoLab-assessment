/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: "#6864CF",
        secondary: "#D0D0D0"
      }
    },
  },
  plugins: [],
}
