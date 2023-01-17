/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      white: '#ffffff',
      transparent: 'transparent',

      primary: '#6259ca',
      primaryHover: '#403fad',

      secondary: '#f1388b',
      secondaryHover: '#ba0396',

      red: '#fd6074',
      redHover: '#f53729',

      green: '#19b159',
      greenHover: '#0c6c34',

      lighten: {
        'bg-body': '#EAEDF7',
        color: '#1d212f',
        border: '#bdbdd7',
      },

      darken: {
        'bg-body': '#24243E',
        'bg-theme': '#0e0e23',
        color: '#d0d0e2',
        border: '#474749',
      },
    },
    screens: {
      sm: '475px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      noto: ['"Noto Sans"', 'sans-serif'],
    },
    fontSize: {
      th: '12px',
      sm: '14px',
      base: '16px',
      xl: '24px',
      '2xl': '28px',
    },
    extend: {
      dropShadow: {
        lighten: [
          '0 8px 10px rgba(0, 0, 0, 0.3)',
          '0 3px 14px rgba(0, 0, 0, 0.04)',
          '0 4px 5px rgba(0, 0, 0, 0.04)',
        ],
        darken: [
          '0 8px 10px rgba(0, 0, 0, 0.04)',
          '0 3px 14px rgba(0, 0, 0, 0.04)',
          '0 4px 5px rgba(0, 0, 0, 0.04)',
        ],
      },
      lineHeight: {
        24: '24px',
        30: '30px',
        34: '34px',
      },
    },
  },

  plugins: [],
};
