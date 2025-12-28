/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F0F',
        surface: '#1A1A1A',
        primary: '#8B5CF6',
        'primary-glow': 'rgba(139, 92, 246, 0.3)',
        secondary: '#EC4899',
        text: '#F8FAFC',
        'text-muted': '#94A3B8',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' },
          'to': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.8), 0 0 35px rgba(139, 92, 246, 0.4)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}