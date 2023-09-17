/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
    colors: {
      lightGreen: '#0dff00',
      black: '#09090b',
      orange: '#ca8a04',
      white: '#fafaf9',
      lighterGreen: '#a3e635' ,
      gray: '#969696',
      red: '#850b03',
      lightGray: '#c9c9c9',
      yellow: "#fcdb03",
      red: "#c40000",
      purple: "#b80056"
    },
    fontFamily:{
      niceFont: 'Chakra Petch',
      oneFont: 'Oswald'
    }
  },
  plugins: [],
}