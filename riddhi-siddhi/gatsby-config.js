/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`, // For optimized image loading
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // Path for images
      },
    },
    `gatsby-transformer-sharp`, // For image transformations
    `gatsby-plugin-sharp`, // For image transformations
    {
      resolve: `gatsby-source-filesystem`, // This helps Gatsby source files from a folder
      options: {
        name: `pages`, // This name will be used to source markdown content
        path: `${__dirname}/content/pages/`, // Path where markdown files will be stored
      },
    },
    `gatsby-transformer-remark`, // To parse markdown files
    {
      resolve: `gatsby-plugin-netlify-cms`, // This integrates Netlify CMS with your Gatsby site
      options: {
        // This will use the default "admin" folder for the CMS panel
        adminPath: `${__dirname}/static/admin`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Web app manifest settings
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Icon for your app
      },
    },
  ],
}
