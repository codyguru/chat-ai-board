const _ = require('lodash');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.{css, scss}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        black: '#000',
        grey: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#d9d9d9',
          400: '#bfbfbf',
          500: '#8c8c8c',
          600: '#595959',
          700: '#262626',
          800: '#1c1c1c',
          900: '#090909',
        },
      },
      textColor: {
        primary: `rgba(255, 255, 255, 0.87)`,
        secondary: `rgba(255, 255, 255, 0.45)`,
      },
      divideColor: `rgba(255, 255, 255, 0.1)`,
      borderRadius: {
        primary: '8px',
        secondary: '16px',
        regular: '50%',
      },
      boxShadow: (theme) => ({
        primary: `0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 12%), 0px 1px 3px rgb(0 0 0 / 20%)`,
        secondary: `0px 1px 4px rgba(255, 255, 255, 0.08)`,
      }),
      backgroundImage: {
        'base-gradient': 'linear-gradient(to bottom, #00B8D9, #1939B7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, e, theme, variants }) {
      const colors = flattenColorPalette(theme('borderColor'));

      const utilities = _.flatMap(_.omit(colors, 'default'), (value, modifier) => ({
        [`.${e(`border-t-${modifier}`)}`]: { borderTopColor: `${value}` },
        [`.${e(`border-r-${modifier}`)}`]: { borderRightColor: `${value}` },
        [`.${e(`border-b-${modifier}`)}`]: { borderBottomColor: `${value}` },
        [`.${e(`border-l-${modifier}`)}`]: { borderLeftColor: `${value}` },
      }));

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
