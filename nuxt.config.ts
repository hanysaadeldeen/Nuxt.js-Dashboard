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
    "nuxt-link-checker",
    "@nuxtjs/robots",
    "@element-plus/nuxt",
    "nuxt-graphql-client",
    "@vee-validate/nuxt",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "nuxt-og-image",
  ],
  robots: {
    rules: [
      {
        UserAgent: "googlebot",
        Disallow: ["/admin", "/*.pdf", "/*.jpg", "*?q=*"],
        Allow: ["/admin/login", "*?a=*"],
      },
      {
        UserAgent: "*",
        Allow: "/",
      },
    ],
    sitemap: "https://your-site.com/sitemap.xml",
  },

  sitemap: {
    hostname: "http://localhost:3000",
    routes: async () => {
      return ["/", "/signin", "/signup", "/adduser", "/users/:userId"];
    },
  },

  schemaOrg: { canonicalHost: "http://localhost:3000", defaultLanguage: "en" },

  ogImage: {
    host: "http://localhost:3000",
  },

  linkChecker: { verbose: true, report: ["html", "markdown"] },
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
});
