module.exports = {
  mode: 'jit',
  purge: [
    './resources/views/**/*.edge',
    './resources/assets/ts/**/*.ts',
    './resources/assets/js/**/*.js',
    './resources/assets/scss/**/*.scss',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
