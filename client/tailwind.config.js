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
          DEFAULT: '#0F172A', // Slate 900
          light: '#1E293B',   // Slate 800
          dark: '#020617',    // Slate 950
        },
        accent: {
          DEFAULT: '#F59E0B', // Precision Amber/Orange
          hover: '#D97706',
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
        'industrial-gradient': 'linear-gradient(to right, #0F172A, #1E293B)',
        'steel-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      }
    },
  },
  plugins: [],
}
