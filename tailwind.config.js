/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        osw: ["var(--font-oswald)"],
        pop: ["var(--font-poppins)"],
        kumbh: ["var(--font-kumbh)"],
      },
    },
  },
  plugins: [],
}
