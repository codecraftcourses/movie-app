const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [],
};
