/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat"],
      middle: ["Monoton"],
    },
    screens: {
      bp1: { max: "1480px" },
      bp2: { max: "1080px" },
      // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
