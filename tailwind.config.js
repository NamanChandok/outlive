/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'outlive-blue': '#170947',
        'outlive-red': '#f00f0c',
        'outlive-yellow': '#ffb300',
        'cream': "#f8f7ff",
        'dark': "#171716",
      },
      minHeight: {
        '1/2': '50vh',
      },
      fontFamily: {
        'primary': "Proxima Nova, sans-serif"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
}
