/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SourceSans3', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'cabin': ['Cabin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7e7',
          100: '#fdecc4',
          200: '#fad68a',
          300: '#f7bf50',
          400: '#F5AD18', // Main primary color
          500: '#e8940a',
          600: '#d17e00',
          700: '#af6800',
          800: '#8d5200',
          900: '#6b3c00',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
