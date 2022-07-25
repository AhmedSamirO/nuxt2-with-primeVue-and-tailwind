const BASE_URL = process.env.API_BASE_URL

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "tahara",
    htmlAttrs: {
      lang: "ar",
      dir: "rtl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/css/common.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios-accessor",
    "~/plugins/store-accessor",
    "~/plugins/i18n-accessor",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxt/postcss8",
  ],

  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    [
      "primevue/nuxt",
      {
        theme: "tailwind-light",
        components: ["InputText", "Dropdown", "Button", "Toast"],
        directives: ["Tooltip", "Badge"],
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_and_default",
        defaultLocale: "ar",
        defaultDirection: "rtl",
        fallbackLocale: "ar",
        lazy: true,
        langDir: "locales/",
        locales: [
          { code: "en", iso: "en-US", file: "en.json", dir: "ltr" },
          { code: "ar", iso: "ar-EG", file: "ar.json", dir: "rtl" },
        ],
        detectBrowserLanguage: false,
      },
    ],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ["primevue"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extractCSS: {
      ignoreOrder: false,
    },
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
}
