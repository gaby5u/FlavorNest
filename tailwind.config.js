/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jaldi: ["Jaldi", "sams"],
        krub: ["Krub", "serif"],
      },
      colors: {
        customOrange: "#FF9F0E",
        customBlack: "#212121",
        customDarkGray: "#868686",
        customLightGray: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
