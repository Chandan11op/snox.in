/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Blue 900
          light: '#1D4ED8',   // Blue 700
          dark: '#172554',    // Blue 950
        },
        accent: {
          DEFAULT: '#3B82F6', // Blue 500
          hover: '#2563EB',   // Blue 600
        },
        industrial: {
          steel: '#94A3B8',
          silver: '#E2E8F0',
          chrome: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'], // For industrial headings
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0,0,0,0.1)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'industrial-gradient': 'linear-gradient(to right, #1E3A8A, #1D4ED8)',
        'steel-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      }
    },
  },
  plugins: [],
}
