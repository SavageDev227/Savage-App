// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#131316',
        'tabs': '#1C1C21',
        'secondary': '#8a0a0a',
        'primary2': '26262C'
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
