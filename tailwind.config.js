/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Make sure this line is included to scan files in the app directory
    // Add any other paths here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
