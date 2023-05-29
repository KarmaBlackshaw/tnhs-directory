const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
        'mulish': ['Mulish', ...defaultTheme.fontFamily.sans],
        'monomaniac': ['Monomaniac One', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
        'josefin': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('not-last', '&:not(:last-child)')

      addVariant('last', '&:last-child')

      matchUtilities(
        {
          'exact-w': value => ({
            'min-width': value,
            width: value,
            'max-width': value
          })
        },
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          'exact-h': value => ({
            'min-height': value,
            height: value,
            'max-height': value
          })
        },
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          wh: value => ({
            width: value,
            height: value
          })
        },
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          'exact-wh': value => ({
            'min-width': value,
            'max-width': value,
            width: value,
            'min-height': value,
            'max-height': value,
            height: value
          })
        },
        { values: theme('spacing') }
      )
    })
  ]
}

