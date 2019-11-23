require('dotenv').config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		title: `Raisense`,
		description: `We deliver IT-products that actually RAISE you up and optimize business processes up to the point that makes SENSE.`,
		author: `Azizbek Jonibekov`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/ms-icon-310x310.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-prismic`,
			options: {
				repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.PRISMIC_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
			  // your google analytics tracking id
			  trackingId: `UA-149915066-1`,
			  // Puts tracking script in the head instead of the body
			  head: false,
			  // enable ip anonymization
			  anonymize: true,
			}
			}
		// {
		// 	resolve: 'gatsby-plugin-zopfli',
		// 	options: {
		// 	  extensions: ['css', 'html', 'js', 'svg'],
		// 	  path: 'zopfli'
		// 	}
		//   }
	]
};
