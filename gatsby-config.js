module.exports = {
  siteMetadata: {
    title: `Medard Urban`,
    description: `Front-end developer`,
    author: `@medardurban`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Medard Urban`,
        short_name: `Medard urban`,
        start_url: `/`,
        background_color: `#33BA9D`,
        theme_color: `#33BA9D`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bree Serif`,
          `source sans pro` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
    
  ],
}
