/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "375":"375px",
        "425":"425px"
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },

      colors: {
        maincolor: "#00bf63",
        hovercolor: "#00bf63",
        bgmain: "#f9f9f9",
        Secbg:'#adebad',
        Thirdbg:'#10443e',
      },
      boxShadow: {
        'box-shadow': 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      },
    },
  },
  plugins: [],
}