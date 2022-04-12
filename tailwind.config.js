module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      autobus: ["Autobus", "sans"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
