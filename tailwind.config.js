/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hsl-cobalt-bluea': 'hsla(241, 81%, 54%,0.9)',
        'hsl-cobalt-blue':'hsl(241, 81%, 34%)',
        'hsl-pale-blue':'hsl(221, 100%, 40%)',
        'hsl-light-lavender': 'hsl(241, 100%, 89% )',
        'hsl-dark-gray-blue':'hsl(224, 30%, 27%)'
      }
    },
  },
  plugins: [],
}


