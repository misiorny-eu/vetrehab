/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      main: {
        l5: "#D7ECE0",
        l4: "#CCEAD6",
        l3: "#99D4AD",
        l2: "#67BF85",
        l1: "#34A95C",
        DEFAULT: "#019433",
        d1: "#017629",
        d2: "#01591F",
        d3: "#003B14",
        d4: "#001E0A",
        d5: "#011008",
      },
      neutral: {
        l5: "#DAE9EC",
        l4: "#CCD2D4",
        l3: "#99A4A8",
        l2: "#66777D",
        l1: "#334951",
        DEFAULT: "#001C26",
        d1: "#00161E",
        d2: "#001117",
        d3: "#000B0F",
        d4: "#000608",
        d5: "#010809",
      },
      complementary: {
        l5: "#FCEDE9",
        l4: "#F4D3CC",
        l3: "#EAA699",
        l2: "#DF7A67",
        l1: "#D54D34",
        DEFAULT: "#CA2101",
        d1: "#A21A01",
        d2: "#791401",
        d3: "#510D00",
        d4: "#280700",
        d5: "#130301",
      },
      shadows: {
        dark: "#002510",
        light: "#F8E6E2",
      },
    },
    extend: {},
  },
  plugins: [],
};
