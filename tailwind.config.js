/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/main.jsx",
    "./src/App.jsx",
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat"],
      middle: ["Monoton"],
    },
    screens: {
      bp0: { max: "1800px" },
      bp1: { max: "1480px" },
      bp2: { max: "1080px" },
      bp3: { max: "960px" },
      bp4: { max: "780px" },
      bp5: { max: "600px" },
      // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
