/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Edu AU VIC WA NT Dots", "Sans-serif"],
        plain: ["Alegreya"]
      }
    },

    colors: {
      "primary": {
        DEFAULT: "#6DB812",
        50: "#F8FBF3",
        100: "#F0F8E7",
        200: "#DBEDC4",
        300: "#C5E3A0",
        400: "#99CD59",
        500: "#6DB812",
        600: "#62A610",
        700: "#416E0B",
        800: "#315308",
        900: "#213705",
      },

      "secondary": {
        DEFAULT: "#B1AB6C",
        50: "#FBFBF8",
        100: "#F7F7F0",
        200: "#ECEADA",
        300: "#E0DDC4",
        400: "#C8C498",
        500: "#B1AB6C",
        600: "#9F9A61",
        700: "#6A6741",
        800: "#504D31",
        900: "#353320",
      },

      "tertiary": {
        DEFAULT: '#A7482A',
        50: "#FBF6F4",
        100: "#F6EDEA",
        200: "#E9D1CA",
        300: "#DCB6AA",
        400: "#C17F6A",
        500: "#A7482A",
        600: "#964126",
        700: "#642B19",
        800: "#4B2013",
        900: "#32160D",
      },

      "background": {
        DEFAULT: "E9EBE5",
        50: "#FEFEFE",
        100: "#FDFDFC",
        200: "#FAFAF9",
        300: "#F6F7F5",
        400: "#F0F1ED",
        500: "#E9EBE5",
        600: "#D2D4CE",
        700: "#8C8D89",
        800: "#696A67",
        900: "#464745",
      },

      "background-secondary": "#253B38",
      "background-secondary-50": "#F4F5F5",
      "background-secondary-100": "#E9EBEB",
      "background-secondary-200": "#C9CECD",
      "background-secondary-300": "#A8B1AF",
      "background-secondary-400": "#667674",
      "background-secondary-500": "#253B38",
      "background-secondary-600": "#213532",
      "background-secondary-700": "#162322",
      "background-secondary-800": "#111B19",
      "background-secondary-900": "#0B1211",

      "grey": {
        DEFAULT: "8A8A8A",
        50: "#F9F9F9",
        100: "#F3F3F3",
        200: "#E2E2E2",
        300: "#D0D0D0",
        400: "#ADADAD",
        500: "#8A8A8A",
        600: "#7C7C7C",
        700: "#535353",
        800: "#3E3E3E",
        900: "#292929",
      },

      'black': '#111111',
      'white': '#ffffff',
      'gray': '#b6b6b6'
    }
  },
  plugins: [],
}