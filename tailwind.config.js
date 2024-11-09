/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lapBlue: '#007CC2',
        lapDarkBlue: '#29166F',
        lapDarkerBlue: '#080D1C',
      },
    },
  },
  plugins: [],
};
