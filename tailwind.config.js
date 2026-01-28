/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#07080D',
          light: '#0B0E15',
          lighter: '#11141C',
        },
        cyan: {
          DEFAULT: '#00D9FF',
          dark: '#00B8D4',
          light: '#4DE8FF',
        },
        text: {
          primary: '#F4F6FF',
          secondary: '#A6A9B6',
          muted: '#6B6F7D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0, 217, 255, 0.15)',
        'glow-lg': '0 0 60px rgba(0, 217, 255, 0.25)',
        'card': '0 28px 70px rgba(0, 0, 0, 0.55)',
        'card-hover': '0 32px 80px rgba(0, 0, 0, 0.65), 0 0 40px rgba(0, 217, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
