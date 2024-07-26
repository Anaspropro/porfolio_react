/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        gray: "#252525"
      },
      backgroundImage: {
        anas: "url('../assets/anas.jpg')"
      },
      colors:{
        gray: "#252525"
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

