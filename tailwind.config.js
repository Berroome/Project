/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Example primary color
        'muted-foreground': '#6b7280', // Muted text color
        'card-foreground': '#1f2a44', // Card text color
        card: '#ffffff', // Card background
        'accent-foreground': '#111827', // Hover text color
        'primary-foreground': '#ffffff', // Text color for primary background
        ring: '#3b82f6', // Focus ring color
        'ring-offset': '#ffffff', // Focus ring offset color
      },
    },
  },
  plugins: [],
};