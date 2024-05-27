const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
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
  plugins: [require('daisyui')],
};