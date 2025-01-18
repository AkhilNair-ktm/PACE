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
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" },
      },
      scaleup: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1)" },
        "100%": { transform: "scale(0.8)" },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
      scaleup: "scaleup 3s linear infinite",
    },
    fontFamily: {
      Anton: ["Anton", "sans-serif"], // Correct fallback
      PermanentMarker: ["Permanent Marker", "sans-serif"], // Correct fallback
      Monoton: ["Monoton", "sans-serif"], // Correct fallback
      Mogra: ["Mogra", "sans-serif"], // Correct fallback
      Rubik80: ["Rubik 80s Fade", "sans-serif"],
      Jost: ["Jost", "serif"],
      Cookie: ["Cookie", "serif"],
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
