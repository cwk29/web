module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        dark: "rgb(36, 41, 47)",
        darker: "rgb(2, 4, 8)",
        "light-gray": "#f5f8fa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
