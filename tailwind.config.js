/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#845EC2",
        secondary: "#FEF6FF",
        accent: "#FEFEDF",
        text: "#9B89B3"
      },
      fontFamily: {
        roboto: "Roboto, ui-sans-serif",
        poppins: "Poppins, ui-san-serif"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}