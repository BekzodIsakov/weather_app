/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xs2: "420px",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
      },
      fontSize: {
        primary: ["13px", "18px"],
      },
      colors: {
        custom: {
          "off-white": "#f3f3f3",
          "dark-blue": "#21394e",
          gray: {
            50: "#afb0b2",
            100: "#909498",
            200: "#7c7d7e",
          },
          bg: {
            outer: "#313942",
            inner: "#1b1c1e",
            box: "#1f2328",
          },
        },
      },
    },
  },
  plugins: [],
};
