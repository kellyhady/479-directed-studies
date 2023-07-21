/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "0.3px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    fontFamily: {
      serif: ["Ortica"],
      display: ["Picaflor"],
    },
    fontSize: {
      sm: "0.6rem",
      mid: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4rem",
    },
    extend: {
      lineHeight: {
        1: "0.8rem",
      },
    },
  },
};
