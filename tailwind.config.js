const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['src/style.css'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          25: '#fafafa'
        }
      },
      boxShadow: {
        invert: `0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.1)`,
        'md-invert': `0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.1)` ,
        'lg-invert': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);'
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}