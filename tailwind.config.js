/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      martel: ["Martel", "serif"],
      mulish: ["Mulish", "sans-serif"],
      ptsans: ["PT Sans", "sans-serif"],

      // font-family: 'Martel', serif; footer
      // font-family: 'Mulish', sans-serif; titulo
      // font-family: 'PT Sans', sans-serif; cuerpo
    },
    extend: {},
  },
  plugins: [],
};
