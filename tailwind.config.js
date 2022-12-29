/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      csm: { max: "640px" },

      cmd: { max: "768px" },

      clg: { max: "1024px" },

      cxl: { max: "1280px" },

      c2xl: { max: "1536px" },
    },
    minWidth: {
      "1/4": "25%",
    },
  },
  plugins: [],
};
