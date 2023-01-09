/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'ssp': ['"Source Sans Pro"'],
        'lato': ['Lato'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-safe-area')],
};
