/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        'mont-alt': ['Montserrat Alternates', 'sans-serif'],
        popp: ['Poppins', 'sans-serif'],
        'victor-mono': ['Victor Mono', 'sans-serif'],
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
