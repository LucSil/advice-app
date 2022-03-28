module.exports = {
  content: [],
  purge: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        new: "0 0 20px 4px rgba(0,0,0,0.3)",
      },
      colors: {
        "Prim-Light-Cyan": "hsl(193, 38%, 86%)",
        "Prim-Neon-Green": "hsl(150, 100%, 66%)",
        "Neut-Grayish-Blue": "hsl(217, 19%, 38%)",
        "Neut-Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "Neut-Dark-Blue": "hsl(218, 23%, 16%)",
      },
    },

    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    screens: {
      arb: "500px",

      // Mobile Layouts
      m1: "320px", // iPhone 5/SE
      m2: "360px", // Galaxy S20
      m3: "375px", // iPhone 12/13 mini
      m4: "414px", // iPhone 11 Pro Max
    },
  },
  plugins: [],
};
