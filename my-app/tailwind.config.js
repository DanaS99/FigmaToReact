/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        headerbgbox: "rgba(0,0,0,0.5)",
        buttonColor: "rgb(230, 57, 70)",
        yellowLine: "rgb(255, 202, 40)",
        darkgrey: "rgb(24, 30 ,30)",
        reddish: "rgb(255,104,100)"
      },
      backgroundImage: {
        'heading-pattern': "url('/src/assets/HeaderImage1.png')"
      },
      fontFamily:{
        'alegreya': "Alegreya",
      },
      zIndex:{
        '300':'300',
        '600':'600'
      },
      inset:{
        '24px':'-40px',
        '45px':'-45px',
        '20px':'-20px'
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      transitionDuration: {
        '400': '400ms',
      },
      translate: {
        'fulll': '-100%',
      },
      scale: {
        '104': '1.04',
      },
      screens:{ 
        'xs': '384px',
        'xxs': '128px'
      }
    },
  },
  plugins: [],
}

