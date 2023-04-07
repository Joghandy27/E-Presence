/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./node_modules/flowbite/**/*.js","./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'quick':['"Quicksand"','sans-serif']
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
