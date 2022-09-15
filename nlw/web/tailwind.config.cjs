/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/fundo.png')",
        'nlw-gradient': 'bg-gradient-to-r from-purple-400 md:from-yellow-500'
      }
    },
  },
  plugins: [],
}