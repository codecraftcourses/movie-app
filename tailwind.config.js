const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [],
};
