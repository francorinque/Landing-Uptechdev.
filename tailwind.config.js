/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#221F26",
        "dark-medium": "#4D4C52",
        blue: "#1A60FE",
        nav: "#a09d97",
        light: "#E5DFD7",
      },
    },
  },
  plugins: [],
};