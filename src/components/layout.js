/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Menu from './MainNavbar/menu';
import Footer from './Footer/footer';
import Particles from "react-particles-js"
import './layout.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div id="app">
			<div className="particles">
				<Particles
				params={{
					"particles": {
						"number": {
							"value": 120,
							"density": {
								"enable": true,
								"value_area": 3000
							}
						},
						"line_linked": {
							"enable": false,
						},
						"move": {
							"direction": "right",
							"speed": 0.5
						},
						"size": {
							"value": 2
						},
						"opacity": {
							"anim": {
								"enable": true,
								"speed": 1,
								"opacity_min": 0.05
							}
						}
					},
					"interactivity": {
						"events": {
							"onclick": {
								"enable": true,
								"mode": "push"
							}
						},
						"modes": {
							"push": {
								"particles_nb": 1
							}
						}
					},
					"retina_detect": true
				}} />
			</div>
			<Menu />
			<div>
				<Container>
					<main>{children}</main>
				</Container>
				<Footer />
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
