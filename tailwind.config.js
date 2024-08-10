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
        anas: "url('../assets/anas.jpg')",
        home: "linear-gradient(80deg, rgb(255, 180, 0) 22%, rgb(18, 18, 18) 22%)"
      },
      colors:{
        gray: "#252525"
      },      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

