/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      gray: "#D9D9D9",
      pink: "#FFB6B6",
      yellow: "#FFDE68",
      "yellow-dark": "#CAAC42",
    },
    backgroundImage: {
      cheese: "url('./assets/cheese.jpg')",
    },
  },
  plugins: [],
};
