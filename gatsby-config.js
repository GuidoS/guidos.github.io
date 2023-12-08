const path = require("node:path")

module.exports = {
  siteMetadata: {
    title: "Guido Stein's Link Page",
    description: "A link page for all the fun Guido shares",
    author: "Guido Stein",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(`${__dirname}`, "src", "images"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-bootstrap-5",
        short_name: "gb5-starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
}
