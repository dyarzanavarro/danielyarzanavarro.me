module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",

  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        bounce: 'bounce 6s ease infinite',

      },
      colors: {
        'bg-beige': '#e9ddca',
      },
    },
  },
  plugins: [],
}