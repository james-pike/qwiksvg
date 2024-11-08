/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.sky,
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '18': '4.5rem', // 18 * 0.25rem = 4.5rem
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
