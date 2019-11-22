import React, { Component } from 'react';
import Layout from '../components/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const query = graphql`
	{
		allPrismicProject {
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
						localFile {
							childImageSharp {
								fluid {
									src
									srcSet
									sizes
								}
							}
						}
					}
					link {
						link_type
						url
						target
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

export default class Projects extends React.Component {
	state = {
		projects: this.props.data.allPrismicProject.nodes
	};
	render() {
		return (
			<Layout>
				<div className="projects">
					<h1>Projects</h1>
					<Row>
						{this.state.projects.map((project) => {
							return (
								<Col xs={12} sm={6} md={4} lg={3}>
									<div className="project">
										<a href={project.data.link.url} target="_blank">
											<div className="project-img">
												<img
													src={project.data.image.localFile.childImageSharp.fluid.src}
													srcset={project.data.image.localFile.childImageSharp.fluid.srcSet}
													sizes={project.data.image.localFile.childImageSharp.fluid.sizes}
												/>
											</div>
											<div className="project-info">
												<div className="project-name">{project.data.name.text}</div>
												<div className="project-desc">{project.data.description.text}</div>
											</div>
										</a>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
			</Layout>
		);
	}
}
