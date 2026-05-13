/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6c63ff",
        primaryDark: "#5a52d5",
        dark: "#1a1a2e",
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          700: '#1d4ed8',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          700: '#15803d',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          700: '#c2410c',
        },
      },
    },
  },
  plugins: [],
}