const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'a-color': '#e6f4f1',
        'b-color': '#e9c47e',
        'c-color': '#f9feb5',
        'd-color': '#61afc5',
      },
    },
  },
  plugins: [],
};