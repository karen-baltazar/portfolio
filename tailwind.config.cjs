module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          50: '#faf8ff',
          100: '#f5f2ff',
          200: '#f1ebff',
          300: '#ece4ff',
          400: '#e7deff',
          500: '#e2d7ff',
          600: '#ded0ff',
          700: '#d9caff',
          800: '#d5c3ff',
          900: '#d0bcff',
        },
        'gray': {
          50: '#e2e1e3',
          100: '#c5c4c7',
          300: '#8e8d92',
          600: '#424148',
          900: '#05040a',
        },
      },
    },
    fontFamily: {
      'mono': ['JetBrains Mono', 'monospace'],
      'barlow': ['Barlow', 'sans-serif'],
    },
    fontStyle: {
      'italic': 'italic',
      'normal': 'normal',
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}

