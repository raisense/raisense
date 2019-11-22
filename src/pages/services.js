import React, { Component } from 'react';
import Layout from '../components/layout';
import ServicesList from '../components/ServicesList/serviceslist';

export const query = graphql`
	{
		allPrismicServ {
			nodes {
				data {
					description {
						html
						text
					}
					image {
						alt
						copyright
						url
					}
					name {
						html
						text
					}
				}
			}
		}
	}
`;

export default class Services extends Component {
	state = {
		services: this.props.data.allPrismicServ.nodes
	};

	render() {
		return (
			<Layout>
				<ServicesList data={this.state.services} />
			</Layout>
		);
	}
}
