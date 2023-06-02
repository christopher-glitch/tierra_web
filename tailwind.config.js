/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oldlace': '#fdf5e6',
        'ivory': '#fffff0',
        'whitesmoke': '#f5f5f5',
      },
      fontFamily: {
        'orbitron': ['Orbitron'],       
        'titillium': ['Titillium Web'],
        'bassa': ['Noto Sans Bassa Vah'],
      },
      backgroundImage: {
        'system': "url('../images/system.png')",
      }
    },
  },
  plugins: [],
});


