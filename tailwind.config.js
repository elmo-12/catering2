/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      listStyleImage: {
        checkmark: 'url("/img/checkmark.png")'
      }
    }
  },
  plugins: []
}
