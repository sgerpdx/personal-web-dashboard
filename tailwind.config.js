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
    colors: {
      driftwood: "#726463",
      richorange: "#cf5e33",
      darkmaroon: "#793c4c",
      frappetan: "#d4c3ba",
      customblack: "#000000",
      customwhite: "#FFFFFF",
      hornetgrape: "#1d1160",
      charlotteteal: "#008da8",
    },
    fontFamily: {
      autobus: ["Autobus", "sans"],
      futurama: ["FuturamaBold", "sans"],
    },
  },
  plugins: [require("daisyui")],
};
