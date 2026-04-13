/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        container: { center: true, padding: '1rem', screens: { md: '720px', lg: '976px', xl: '1240px' } },
        colors: { brand: { DEFAULT: '#7c3aed', soft: '#a78bfa', dark: '#6d28d9' } },
      },
    },
    plugins: [],
  }
  