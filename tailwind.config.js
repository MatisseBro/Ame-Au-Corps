/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // Pour App Router
    "./pages/**/*.{js,ts,jsx,tsx}",    // (si jamais tu as des pages)
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#398195',
        grisclair: '#f5f5f5',
      }
    },
  },
  plugins: [],
}
