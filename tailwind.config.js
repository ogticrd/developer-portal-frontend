module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#003670',
      'primary-hover': '#1e40af',
      'primary-light': '#60a5fa',
      'primary-dark': '#002349',
      secondary: '#f58315',
      danger: '#dc2626',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#003670',
      'primary-light': '#60a5fa',
      'primary-dark': '#002349',
      secondary: '#f58315',
      danger: '#dc2626',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
