
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 head: {
  // title: process.env.npm_package_name || 'Deziguais',
  title: 'Deziguais',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    { hid: 'description', name: 'description', content: 'DEZ natalenses de diferentes origens e com trajetórias em diversas causas, trazendo o senso  de coletividade na participação política, com o objetivo de transformar Natal em uma cidade com oportunidades IGUAIS para todos e todas.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&family=Teko:wght@300;400;500;600;700&display=swap'}
  ]
},
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
