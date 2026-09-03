/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        game: ['"Lilita One"', 'cursive', 'sans-serif'],
        bubble: ['"Fredoka"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        roblox: {
          cyan: '#00d2ff',
          blue: '#1e88e5',
          green: '#10b981',
          lime: '#4ade80',
          yellow: '#facc15',
          orange: '#fb923c',
          red: '#ef4444',
          pink: '#f43f5e',
          purple: '#a855f7',
          dark: '#111827',
          card: '#1f2937',
          studGray: '#2b3442',
          studHeader: '#1e2530',
        },
      },
      boxShadow: {
        'stud-btn': '0 6px 0 rgba(0, 0, 0, 0.4), 0 8px 12px rgba(0, 0, 0, 0.3)',
        'stud-btn-active': '0 2px 0 rgba(0, 0, 0, 0.4)',
        'stud-card': '0 8px 0 rgba(15, 23, 42, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.15)',
        'glow-cyan': '0 0 20px rgba(0, 210, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(244, 63, 94, 0.5)',
        'glow-yellow': '0 0 20px rgba(250, 204, 21, 0.5)',
      },
    },
  },
  plugins: [],
};
