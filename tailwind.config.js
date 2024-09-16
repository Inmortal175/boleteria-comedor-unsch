/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        popp: ['Poppins', 'sans-serif'],
        victor: ['Victor Mono', 'sans-serif'],
      },
      colors: {
        'red-unsch': '#5D0104',
        'peach-unsch': '#C99100',
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'latte',
    }),
  ],
};
