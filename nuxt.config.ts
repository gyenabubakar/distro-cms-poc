// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js",
        },
      ],
    },
  },
});
