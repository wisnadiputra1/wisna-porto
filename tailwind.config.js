/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#6CDCFC',
        'text-main': '#909090',
        'bg-secondary': '#CBFFDC',
        'bg-third': '#CEFF7D',
      },
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"]
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },    
      
    },
  },
  plugins: [],
}

