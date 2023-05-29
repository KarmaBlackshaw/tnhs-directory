// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/icons.scss',
    '~/assets/css/main.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  googleFonts: {
    families: {
      Roboto: true,
      Mulish: true,
      Poppins: true,
      'Josefin Sans': true,
      'Ubuntu Mono': true,
      'Monomaniac One': true

    }
  }
})
