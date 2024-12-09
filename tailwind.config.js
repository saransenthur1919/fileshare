/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0FAF4',
        secondary: '#EF9EB1',
        impcolor: '#D7C4BB',
        imp2color: '#5A4E4D',
        thircolor: '#D8A99E',
        butcolor: '#5A897E',
        but2color: '#F1E3DD',
        but3color: '#F3EBE7',
        imp3color: '#CB997E'
      },
    },
  },
  plugins: [],
};
