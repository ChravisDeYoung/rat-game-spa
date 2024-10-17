/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      cheese: "url('./assets/cheese.jpg')",
    },
    colors: {
      black: "#000000",
      "difficulty-very-easy": "#6EC300",
      "difficulty-easy": "#407200",
      "difficulty-medium": "#FFA800",
      "difficulty-hard": "#BC0A0A",
      "difficulty-very-hard": "#681300",
      gray: "#C6C6C6",
      "gray-dark": "#9F9F9F",
      pink: "#FF9B9B",
      "pink-dark": "#FF7878",
      white: "#FFFFFF",
      yellow: "#FFDE68",
      "yellow-dark": "#CAAC42",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    fontSize: {
      big: "2.5rem",
      medium: "1.2rem",
      small: "1rem",
    },
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        incorrect: "shake 0.5s linear",
      },
    },
  },
  plugins: [],
};
