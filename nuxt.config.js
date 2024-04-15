export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "fe-clea-webapp",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.min.css",
      },
    ],
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/scss/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/axios.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3030",
  },

  server: {
    port: 2805,
    host: "localhost",
  },

  ssr: false,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
