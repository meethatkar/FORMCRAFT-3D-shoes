/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F4F0',
        primary: '#171717',
        accent: '#FF5A1F',
        'accent-hover': '#E04810',
        surface: '#FFFFFF',
        'surface-subtle': '#ECEAE4',
        muted: '#71717A',
        border: '#E4E2DC'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'medium': '0 12px 30px -4px rgba(0, 0, 0, 0.08)',
        'float': '0 20px 40px -6px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 25px rgba(255, 90, 31, 0.35)'
      }
    },
  },
  plugins: [],
}

