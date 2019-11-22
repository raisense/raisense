import React, { Component } from 'react';
import Layout from '../components/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from '../components/seo';
import facebook from '../images/icons/facebook.svg';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github-sign.svg';

export const query = graphql`
	{
		allPrismicMembers(sort: { order: ASC, fields: uid }, filter: { lang: { eq: "en-us" } }) {
			nodes {
				data {
					avatar {
						alt
						copyright
						url
						localFile {
							childImageSharp {
								fluid {
									srcSetWebp
									srcWebp
									sizes
								}
							}
						}
					}
					job {
						html
						text
					}
					name {
						html
						text
					}
					social {
						facebook {
							link_type
							url
							target
						}
						github {
							link_type
							url
							target
						}
						linkedin {
							link_type
							url
							target
						}
					}
				}
				lang
			}
		}
	}
`;
export default class OurTeam extends Component {
	state = {
		members: this.props.data.allPrismicMembers.nodes
	};

	render() {
		return (
			<Layout>
				<SEO title="Our Team" />
				<div className="team">
					<h1>Our Team</h1>
					<Row>
						{this.state.members.map((member) => {
							const fluidImages = member.data.avatar.localFile.childImageSharp;
							console.log(fluidImages);
							return (
								<Col xs={12} sm={6} md={4} lg={3}>
									<div className="card">
										<div className="card-img">
											{fluidImages ? (
												<img
													src={fluidImages.fluid.srcWebp}
													srcSet={fluidImages.fluid.srcSetWebp}
													sizes={fluidImages.fluid.sizes}
												/>
											) : (
												<img src={member.data.avatar.url} />
											)}
										</div>
										<div className="card-desc">
											<div className="desc-info">
												<p className="card-name">{member.data.name.text}</p>
												<p className="card-job">{member.data.job.text}</p>
											</div>

											<div className="extra-info">
												<div className="social-item">
													<a href={member.data.social[0].facebook.url}>
														<img src={facebook} alt="" />
													</a>
												</div>
												<div className="social-item">
													<a href={member.data.social[0].linkedin.url}>
														<img src={linkedin} alt="" />
													</a>
												</div>
												<div className="social-item">
													<a href={member.data.social[0].github.url}>
														<img src={github} alt="" />
													</a>
												</div>
											</div>
										</div>
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
