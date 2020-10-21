
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/swiper.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    ['nuxt-cookie-control', {
      text: {
        locale: {
          en: {
            barTitle: 'Cookies',
            barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
            acceptAll: 'Accept all',
            declineAll: 'Delete all',
            manageCookies: 'Manage cookies',
            unsaved: 'You have unsaved settings',
            close: 'Close',
            save: 'Save',
            necessary: 'Necessary cookies',
            optional: 'Optional cookies',
            functional: 'Functional cookies',
            blockedIframe: 'To see this, please enable functional cookies',
            here: 'here'
          }
        }
      }
    }]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'de',
        file: 'de-DE.js'
      },
      {
        code: 'es',
        file: 'es-ES.js'
      },
      {
        code: 'pt',
        file: 'pt-PT.js'
      },
      {
        code: 'si',
        file: 'si-SI.js'
      },
      {
        code: 'en',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'lang/'
  },
  cookies: {
    necessary: [
      {
        name: {
          en: 'Default Cookies'
        },
        description: {
          en: 'Used for cookie control.'
        },
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        description: {
          en: 'Google GTM is ...'
        },
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          })
        },
        declined: () => {
        }
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
