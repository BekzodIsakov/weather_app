/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
      },
      colors: {
        custom: {
          "off-white": "#f3f3f3",
          gray: {
            50: "#adb0b2",
            100: "#909498",
            200: "#7c7d7e",
          },
          "dark-blue": "#21394e",
          dark: {
            50: "#202328",
            100: "#1b1d1f",
          },
        },
      },
    },
  },
  plugins: [],
};
