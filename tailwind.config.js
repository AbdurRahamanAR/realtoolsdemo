/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      DEFAULT: "10px",
    },
    colors: {
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      deep_orange: "var(--deep-orange)",
      light_orange: "var(--light-orange)",
      dark: "#000103",
      white: "#ffffff",
      sapphire: "#021850",
      alice_blue: "#F6F8FD",
    },
    fontFamily: {
      inter: "Inter",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1245px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
