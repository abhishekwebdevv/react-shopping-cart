module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
};
