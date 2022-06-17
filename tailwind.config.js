/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    colors: {
      primary: "#6864CF",
      secondary: "#D0D0D0",
      white: "#fff",
      black: "#000"
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
}
