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
        inria: ['"Inria Serif"', 'serif'],
        alkalami: ['"Alkalami"', 'serif'],
        alatsi: ['"Alatsi"', 'serif'],
        abhaya: ['"Abhaya"', 'serif'],
        "abhaya-bold": ['"Abhaya Bold"', 'serif']
      },
      colors:  {
        primary: {
          DEFAULT : "#2C3C7C"
        },
        secondary: {
          DEFAULT: "#F97A0B"
        },
        ternary: {
          DEFAULT: "#7FD8F9"
        }
      }
    },
  },
  plugins: [],
}

