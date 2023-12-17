/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        lorafont: "'Lora', serif",
        jostfont :  "'Jost', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}

