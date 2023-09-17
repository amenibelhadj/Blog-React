module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        bluegray: {
          50: "#e6ebef",
          600: "#5f6c86",
          900: "#262b35",
          "900_99": "#262b3599",
          "100_4c": "#d8d8d84c",
        },
        red: { 700: "#d13329" },
        blue: { A700: "#0061ff" },
        black: { "900_0c": "#0000000c" },
        white: { A700: "#ffffff" },
        gray: { 50: "#fafcff" },
      },
      fontFamily: { montserrat: "Montserrat", gilroy: "Gilroy" },
      boxShadow: { bs: "0px 11px  35px 0px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
