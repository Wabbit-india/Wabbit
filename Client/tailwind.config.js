/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },

      colors: {
        maincolor: "#00bf63",
        hovercolor: "#00bf63",
        bgmain: "#f9f9f9",
      },
    },
  },
  plugins: [],
}