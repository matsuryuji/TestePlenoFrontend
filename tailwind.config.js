/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      sm: "4px",
      md: "9px",
      lg: "11px",
      xl: "18px",
    },

    fontSize: {
      xs: "7px",
      sm: "10px",
      base: "12px",
      normal: "14px",
      medium: "16px",
      lg: "24px",
      "2lg": "32px",
      "3lg": "54px",
      xl: "64px",
    },
    extend: {
      boxShadow: {
        sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["sans-serif"],
        strong: ["strong"],
        inter: ["Inter"],
        teko: ["Teko"],
        poppins: ["Poppins"],
        sail: ["Sail"],
        "rubik-glitch": ["Rubik Glitch"],
        "russo-one": ["Russo One"],
        "saira-stencil-one": ["Saira Stencil One"],
        "rubik-wet-paint": ["Rubik Wet Paint"],
      },
      lineHeight: {
        title: "96px",
      },
      colors: {
        gray: "#D9D9D9",
        placeholder: "#828282",
        red: "#990000",
        "light-gray": "#B1AEAE",
        "light-red": "#B80000",
        yellow: "#F0AD00",
        blue: "#003A91",
      },
      backgroundColor: {
        red: "#990000",
        dark: "#414141",
        "light-gray": "#777777",
        "dark-gray": "#2E2E2E",
        "light-red": "#B80000",
        gray: "#D9D9D9",
        yellow: "#F0AD00",
        blue: "#003A91",
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
