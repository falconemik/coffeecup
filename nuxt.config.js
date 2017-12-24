
module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    // '@nuxtjs/auth',

    // ...Axios module should be included AFTER @nuxtjs/auth
    '@nuxtjs/axios'
  ],
  // Default Values
  // auth: {
  //   user: {
  //     endpoint: 'auth/user',
  //     propertyName: 'user',
  //     resetOnFail: true
  //   },
  //   login: {
  //     endpoint: 'auth/login'
  //   },
  //   logout: {
  //     endpoint: 'auth/logout',
  //     method: 'GET'
  //   },
  //   redirect: {
  //     notLoggedIn: '/login',
  //     loggedIn: '/'
  //   },
  //   token: {
  //     enabled: true,
  //     type: 'Bearer',
  //     localStorage: true,
  //     name: 'token',
  //     cookie: true,
  //     cookieName: 'token'
  //   }
  // },
  head: {
    title: 'coffeecup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue.js project for CoffeeCup' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vuefire.js'
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Puts app in SPA mode
  */
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vuetify',
      'firebase'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
