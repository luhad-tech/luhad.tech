/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SourceSansPro", ...defaultTheme.fontFamily.sans],
        display: ["Comfortaa", "SourceSansPro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        luhad: {
          red: '#ff3232',
          purple: '#9f018b',
          blue: '#00ccff',
          grey: '#333333',
          gray: '#333333'
        },
      }
    },
  },
  plugins: [],
};
