/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wth: {
          green: {
            50: "#F0F7F3",
            100: "#DCEDE2",
            200: "#B9DEC6",
            300: "#8CC8A2",
            400: "#55AC7A",
            500: "#2E8F58",
            600: "#1F7243",
            700: "#185B36",
            800: "#004B2C", // Base logo dark green
            900: "#003720",
            950: "#012415", // Deep luxury green
          },
          pink: {
            50: "#FDF5FE",
            100: "#FCEAFE",
            200: "#F8D4FD",
            300: "#F2B2FA",
            400: "#E58AF1", // Base logo pink
            500: "#D461E4",
            600: "#B83DCC",
            700: "#972BA9",
            800: "#7C258A",
            900: "#65236F",
            950: "#440D4C",
          },
          cream: "#FBF8F3",
          sand: "#F4EFE6",
          dark: "#081A12",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
