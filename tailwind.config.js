/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.html'
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
