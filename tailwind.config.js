module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
        typewriter: ['typeka', 'courier', 'mono']
        // 'itc-american-typewriter', 'john-doe', 'lieberuth', 'typeka'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
