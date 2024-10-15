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
      'primary-100': '#e8fad1',
      'primary-200': '#b9f174',
      'primary': '#6DB812',
      'primary-400': '#538b0e',
      'primary-500': '#1c2e05',

      'secondary-100': '#edecde',
      'secondary-200': '#cac69b',
      'secondary': '#B1AB6C',
      'secondary-400': '#646035',
      'secondary-500': '#212012',

      'tertiary-100': '#f5ded6',
      'tertiary-200': '#e09b85',
      'tertiary': '#A7482A',
      'tertiary-400': '#7a351f',
      'tertiary-500': '#29120a',

      'background': '#E9EBE5',
      'background-secondary': '#253B38',
      'black': '#111111',
      'white': '#ffffff',
      'gray': '#b6b6b6'
    }
  },
  plugins: [],
}