/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        industrial: {
          50: '#f5f7f9',
          100: '#eef1f5',
          200: '#dfe4ea',
          300: '#c5ced8',
          400: '#a3b2c2',
          500: '#8396ab',
          600: '#697a8e',
          700: '#556376',
          800: '#475363',
          900: '#3e4753',
          950: '#1e242c',
        },
        steel: {
          DEFAULT: '#8a949c',
          dark: '#586069'
        }
      },
      spacing: {
        // Enforcing a strict 8px scale where needed. 
        // Tailwind default scale already handles 8px beautifully (4=16px, 8=32px, 12=48px, etc)
        // We'll explicitly add massive spacing options for premium breathing room
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'safe': 'calc(100vh - 4rem)'
      },
      backgroundImage: {
        'steel-gradient': 'linear-gradient(to right, #dfe4ea, #f5f7f9)',
      }
    },
  },
  plugins: [],
}
