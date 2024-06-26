const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`

/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({

  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      title: siteTitle, // App window nav title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio' },
        { hid: 'og:title', property: 'og:title', content: siteTitle },
        { hid: 'og:description', property: 'og:description', content: 'Portfolio' },
        { hid: 'og:image', property: 'og:image', content: 'share-cover.jpg' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://www.w3schools.com/w3css/4/w3.css'},
        { rel: 'stylesheet', href: 'https://unpkg.com/prismjs/themes/prism.css'},
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jersey+15&family=Permanent+Marker&family=Rubik+Mono+One&family=Sedgwick+Ave+Display&family=Silkscreen:wght@400;700&family=Source+Code+Pro&display=swap&family=Poetsen+One&display=swap'},
      ],
      script: [
        {src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js'},
        {src: 'https://kit.fontawesome.com/d3a076a782.js'},
        {src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'},
        {src: 'https://unpkg.com/prismjs'},
        {src: 'https://scripts.sirv.com/sirvjs/v3/sirv.js'},
        {src: 'https://static.imgix.net/ix-player/@latest/dist/ix-player.mjs'},
        {innerHTML: 'emailjs.init(\'2z2G1Z5GbSaziHlBg\')'}
      ]
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    preload: true
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  components: {
    dirs: [
      '~/components',
    ],
  },
  
  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      dev: config
    }
  }
})
