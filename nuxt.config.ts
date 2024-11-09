// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: "2024-04-03",
//   devtools: { enabled: true },
//   css: [
//     "bootstrap/dist/css/bootstrap.min.css",
//     "bootstrap-icons/font/bootstrap-icons.css",
//   ],
//   plugins: ["~/plugins/supabase.js"],
//   modules: [
//     "@vee-validate/nuxt",
//     "@element-plus/nuxt",
//     "nuxt-graphql-client",
//     "@nuxt/image",
//   ],

//   veeValidate: {
//     autoImports: true,
//   },

//   build: {
//     transpile: [],
//   },
//   runtimeConfig: {
//     public: {
//       GQL_HOST: process.env.GQL_HOST,
//       supabaseUrl: process.env.NUXT_SUPABASE_URL,
//       supabaseKey: process.env.NUXT_SUPABASE_KEY,
//     },
//   },
// });
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
    autoImports: true,
  },

  build: {
    transpile: [],
  },

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseKey: process.env.NUXT_SUPABASE_KEY,
    },
  },

  ssr: true, // تمكين الـ SSR

  app: {
    baseURL: "/", // ضبط قاعدة التوجيه بشكل صحيح
  },
});
