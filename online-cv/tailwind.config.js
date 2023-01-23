/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      inset: {
        '1/6':'16%',
        '5/6':'80%'
      }
    },
  },
  plugins: [],
}
