/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins':["Poppins", 'sans-serif'],
      'DM' : ["DM Sans", 'sans-serif'],
      

    },
    container: {
      center: true,
      screens: {
        '2xl': '100%',
      },
    },
    extend: {},
  },
  plugins: [],
}
