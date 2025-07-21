/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crust': '#11111b',
        'mantle': '#181824',
        'base': '#1e1e2e',
        'text': '#cdd6f4',
        'subtext0': '#a6adc8',
        'overlay2': '#9399b2',
        'red': '#f38ba8',
        'green': '#a6e3a1',
        'yellow': '#f9e2af',
        'blue': '#89b4fa',
        'pink': '#f5c2e7',
        'mauve': '#cba6f7',
        'cyan': '#89dceb',
        'teal': '#94e2d5',
        'lavender': '#b4befe',
      },
    },
  },
  plugins: [],
}
