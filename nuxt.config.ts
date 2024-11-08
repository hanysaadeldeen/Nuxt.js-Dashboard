// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  plugins: ["~/plugins/supabase.js"],
  modules: [
    "@vee-validate/nuxt",
    "@element-plus/nuxt",
    "nuxt-graphql-client",
    "@nuxt/image",
  ],

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
  },

  build: {
    transpile: [],
  },
  runtimeConfig: {
    public: {
      GQL_HOST: "https://api.escuelajs.co/graphql",
    },
  },
});
