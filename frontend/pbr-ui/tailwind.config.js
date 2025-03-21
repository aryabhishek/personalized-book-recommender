/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        myPurple: {
          200: "#d9ddee",
          500: "#9492db",
          600: "#7164c0",
        },
        myGray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c"
        },
        myBlack: {
          500: "#1e1f20",
          700: "#0e0e0e"
        },
        light: {
          background: "#F8F9FA", // Soft White
          card: "#FFFFFF", // Pure White
          text: "#333333", // Dark Gray
          accent: "#2563EB", // Blue Accent
        },
        // Dark Theme Colors
        dark: {
          background: "#121212", // Deep Black
          card: "#1E1E1E", // Charcoal Gray
          text: "#EAEAEA", // Soft White
          accent: "#3B82F6", // Bright Blue Accent
        }
      },
    },
  },
  plugins: [],
};