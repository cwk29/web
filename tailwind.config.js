const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [], // empty array means no files are whitelisted
  darkMode: "class", // or 'media' or 'class'
  theme: {
    minHeight: {
      "3/4": "75vh",
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
        3: "3px",
      },
      height: {
        128: "32rem",
      },
      colors: {
        primary: colors.blue[700],
        accent: colors.slate[400],
        success: colors.emerald[500],
        danger: "#d81d36",
        warning: "#d8cc1d",
        info: "#4062bf",
        // danger: colors.rose[500],
        // warning: colors.amber[500],
        // info: colors.blue[500],
        // dark: "rgb(36, 41, 47)",
        // darker: "rgb(2, 4, 8)",
        dark: "hsl(213, 14%, 16%)",
        darker: "hsl(221,57%,11%)",
        darkest: "hsl(219, 78%, 7%)",
        default: "hsl(204,33%,97%)",
        "outline-default": "hsl(208,19%,84%)",
      },
      fontFamily: {
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        benefits: 'url("./assets/benefits.jpg")',
        cloud: 'url("/assets/cloud.jpeg")',
        dan: 'url("/assets/images/dan-wortman.jpeg")',
        design: 'url("/assets/design.jpg")',
        engineer: 'url("/assets/engineer.jpg")',
        hardware: 'url("/assets/hardware.jpg")',
        katie: 'url("/assets/images/katie-rahn.jpg")',
        manpack: 'url("/assets/manpack.jpg")',
        mobile: 'url("/assets/mobile.jpg")',
        mountains: 'url("./assets/mountains.jpg")',
        scott: 'url("/assets/images/scott-wecht.png")',
        snowcaps: 'url("./assets/snow-caps.jpeg")',
        software: 'url("/assets/software.jpg")',
        warplane: 'url("./assets/warplane.jpg")',
      },
    },
  },
  plugins: [],
};
