/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#1A1A1A",
        primary: "#E10600",
        textPrimary: "#FFFFFF",
        textSecondary: "#A3A3A3",
      },
    },
  },
  plugins: [],
};
