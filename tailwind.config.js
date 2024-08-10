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
        home: "linear-gradient(80deg, rgb(235, 10, 5) 22%, rgb(0, 0, 0) 10%)",
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

