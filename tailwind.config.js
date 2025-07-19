/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8821e',        // Main brand color
        'primary-light': '#f99f4d', // Light variant
        'primary-dark': '#d76d0c',  // Darker shade
        'accent-1': '#ffe8d9',      // Background tint / highlight
        'accent-2': '#fff4ec',      // Very light secondary
        'text-base': '#1f2937',     // Dark text (gray-800)
        'text-light': '#6b7280',    // Light text (gray-500)
        'bg-light': '#f9f7f6',      // Soft background
        'bg-dark': '#1e1e1e'        // Dark sections if needed
      }
    },
  },
  plugins: [],
}
