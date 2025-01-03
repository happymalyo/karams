/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        mainBG: "#7ED4AD", 
        blue: "#4A628A",
        title: "#B03052"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
