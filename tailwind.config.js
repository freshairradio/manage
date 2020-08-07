const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [!process.env.ROLLUP_WATCH && './src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')({ layout: 'sidebar' })]
}
