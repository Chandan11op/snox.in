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
          DEFAULT: '#0A2540', // Deep Blue
          light: '#11355F',
          dark: '#05182D',
        },
        accent: {
          DEFAULT: '#00D4FF', // Electric blue accent
        },
        surface: {
          DEFAULT: '#F8FAFC', // Light Grey
          dark: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #0A2540 0%, #11355F 100%)',
      }
    },
  },
  plugins: [],
}
