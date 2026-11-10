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
          pine: "#084C3F",
          lime: "#D8E500",
          limeSoft: "#EBF35C",
          dark: "#05332A",
        },
      },
    },
  },
  plugins: [],
};
