/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',       // Deeper black for premium feel
        secondary: '#16181C',     // Rich dark gray
        surface: '#1F2125',       // Darker surface for contrast
        highlight: '#D4AF37',     // Gold with more luxury feel
        light: '#f0efe7',       // Light gray-white - for clean readable text
        contrast: '#FFFFFF',      // Pure white for better contrast
        muted: '#7A828A',       // Cool muted gray - helper or placeholder text
        text: '#D0D5DA',        // Soft light text - primary readable copy
        border: '#3B4045',      // Mid-gray - subtle borders or dividers
        action: '#C90A02',       // Deeper red for CTAs


      },
      fontFamily: {
        RedHat: ['RedHat', ...defaultTheme.fontFamily.sans],
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
        Geologica: ['Geologica', ...defaultTheme.fontFamily.sans],
        Lexend: ['Lexend', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        'site': '1280px',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
    },
  },
  plugins: [],
}