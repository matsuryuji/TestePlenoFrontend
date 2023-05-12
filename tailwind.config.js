/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      sm: "4px",
      md: "9px",
      lg: "11px",
    },

    fontSize: {
      xs: ".75rem",
      sm: "10px",
      base: "12px",
      medium: "16px",
      lg: "24px",
      xl: "64px",
    },
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        strong: ["strong"],
        inter: ["Inter"],
      },
      lineHeight: {
        title: "96px",
      },
      colors: {
        gray: "#D9D9D9",
        placeholder: "#828282",
        red: "#990000",
        "light-gray": "#B1AEAE",
      },
      backgroundColor: {
        red: "#990000",
        dark: "#414141",
        "dark-gray": "#2E2E2E",
        gray: "#D9D9D9",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
