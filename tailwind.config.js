/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {},
    fontFamily: {
      Anton: ["Anton", "sans-serif"], // Correct fallback
      PermanentMarker: ["Permanent Marker", "sans-serif"], // Correct fallback
      Monoton: ["Monoton", "sans-serif"], // Correct fallback
      Mogra: ["Mogra", "sans-serif"], // Correct fallback
      Rubik80: ["Rubik 80s Fade", "sans-serif"], 
      Jost :["Jost","serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [],
};
