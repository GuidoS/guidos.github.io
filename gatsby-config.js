const path = require("node:path")

module.exports = {
  siteMetadata: {
    title: "Guido Stein's Link Page",
    description: "A link page for all the fun Guido shares",
    author: "Guido Stein",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-toml",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(`${__dirname}`, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "presentations",
        path: path.join(__dirname, "src", "data"),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
}
