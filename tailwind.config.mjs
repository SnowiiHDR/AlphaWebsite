/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Alpha Phi Alpha official colors
        "alpha-gold": {
          DEFAULT: "#B58A2C", // Old Gold
          50: "#F8F1DC",
          100: "#F1E3B8",
          200: "#E5C879",
          300: "#D5AC4A",
          400: "#B58A2C",
          500: "#9B7524",
          600: "#7C5C1C",
          700: "#5C4515",
          800: "#3D2D0E",
          900: "#1F1607",
        },
        "alpha-black": "#0B0B0B",
        "alpha-cream": "#FAF6EC",
        "alpha-ink": "#1A1A1A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
        wide: "1200px",
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
