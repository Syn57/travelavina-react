/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        alfaslab: ['"Alfa Slab One"', 'serif'],
        alata: ['"Alata"', 'serif'],
        alice: ['"Alice"', 'serif'],
        archivo: ['"Archivo"', 'serif'],
        alike: ['"Alike"', 'serif'],
      },
      colors:  {
        primary: {
          DEFAULT : "#2C3C7C"
        },
        secondary: {
          DEFAULT: "#F97A0B"
        }
      }
    },
  },
  plugins: [],
}

