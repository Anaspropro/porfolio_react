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
        home: "linear-gradient(89deg, rgb(59, 130, 246) 42%, rgb(0, 0, 0) 10%)",
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

