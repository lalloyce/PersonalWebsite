/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B2D53', // Navy blue
          light: '#2A4374',
          dark: '#0F1B33',
        },
        secondary: {
          DEFAULT: '#FF6B35', // Vibrant orange
          light: '#FF8659',
          dark: '#E54E1B',
        },
        accent: {
          DEFAULT: '#FFB800', // Golden yellow
          light: '#FFCC33',
          dark: '#CC9200',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
