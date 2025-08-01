/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors from colors.md
        brand: {
          primary: '#1B9AAA',
          'primary-light': '#6AD5CB', 
          secondary: '#58B09C',
          accent: '#A1E8CC',
          dark: '#2E4052',
          'dark-alt': '#1C3144',
          light: '#CAF7E2',
          neutral: '#D2D7DF',
        },
        // Dark theme colors
        dark: {
          bg: '#0F172A',
          'bg-secondary': '#1E293B',
          'bg-accent': '#334155',
          text: '#E2E8F0',
          'text-secondary': '#94A3B8',
          'text-muted': '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Open Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(27, 154, 170, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(27, 154, 170, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'brand': '0 4px 14px 0 rgba(27, 154, 170, 0.39)',
        'brand-lg': '0 10px 25px -3px rgba(27, 154, 170, 0.35)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}