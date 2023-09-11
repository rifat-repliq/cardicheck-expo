/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#115E59",
        "primary-400": "#0D9488",
        "primary-300": "#5EEAD4 ",
        "primary-200": "#CCFBF1",
        "primary-100": "#F0FDFA",
        "primary-50": "#FCFFFA",

        "red-500": "#DA0B0B",
        "red-200": "#FDE2E2",
        "grey-600": "#333333",
        "grey-500": "#666666",
        "grey-400": "#999999",
        "grey-300": "#CCCCCC",
        "grey-200": "#E1E1E1",
        "grey-100": "#FAFAFA",
      },
      ringColor: {
        clock: "#666666",
      },
    },
  },
  plugins: [],
};
