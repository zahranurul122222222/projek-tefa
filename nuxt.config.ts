// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["bootstsrap/dits/css/bootstsrap.min.css"],
  
  modules: ["@nuxtjs/supabase"],
  supabase: ["redirect: false"],

})
