module.exports = {
  mode: "spa",
  head: {
    title: "%s | AstraCi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preload", as: "image", href: "/cabinet.jpg" },
      { rel: "preload", as: "image", href: "/secure.jpg" },
      { rel: "preload", as: "image", href: "/feedback.jpg" },
      { rel: "preload", as: "image", href: "/stem.jpg" },
      { rel: "preload", as: "image", href: "/sport.jpg" }
    ]
  },
  loading: { color: "#fff" },
  css: ["~/assets/layout.css"],
  plugins: [],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
};
