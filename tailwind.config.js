/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      deepOrange: "var(--deep-orange)",
      lightOrange: "var(--light-orange)",
      dark: "#000103",
      white: "#ffffff",
      sapphire: "#021850",
      aliceBlue: "#F6F8FD",
      charcoal: "#4A4A4A",
      glitter: "#E8EFFF",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "300px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1245px",
      "2xl": "1536px",
    },
    extend: {
      borderRadius: {
        DEFAULT: "10px",
      },
      fontSize: {
        heading: [
          "35px",
          {
            fontWeight: 600,
            lineHeight: "50px",
          },
        ],
        body: [
          "18px",
          {
            fontWeight: 400,
            lineHeight: "30px",
          },
        ],
        headerBig: [
          "60px",
          {
            fontWeight: 800,
            lineHeight: "75px",
          },
        ],
      },
      textColor: {
        DEFAULT: "#000103",
      },
    },
  },
  plugins: [],
};
