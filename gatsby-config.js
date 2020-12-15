/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Banahatti - Bhadrannavar Dental Clinic",
    description: "Dental Clinic for all health care for your dental issues",
    author: "Developed by anybodycancode.in team of SMK Solutions",
    twitterUsername: "@anybodycancode.in",
    image: "/twitter-img.png",
    siteUrl: "http://dentalaarogya.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
