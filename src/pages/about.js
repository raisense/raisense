import React, { Component } from 'react';
import Layout from '../components/layout';

export const query = graphql`
	 {
		allPrismicAbout {
			nodes {
			data {
				about_text {
				html
				}
			}
			}
		}
	}	
	
`
export default class About extends Component {
	state = {
		aboutHTML: this.props.data.allPrismicAbout.nodes
	}
	render() {
		return (
			<Layout>
				<h1>About Us</h1>
				<p class="about-text">
					We can help you reimagine your business through a digital lens. Our software engineering heritage
					combined with our strategic business and innovation consulting, design thinking, and
					physical-digital capabilities provide real business value to our customers through human-centric
					innovation.
					<br />
					<br />
					Win by converting breakthrough ideas to real outcomes, fast. Our end-to-end services combine
					business and innovation strategy, experience design, technology consulting and best-in-class
					software engineering to deliver results on a global scale. Are we enlightened builders or practical
					visionaries?
					<br />
					<br />
					The answer is, both. Either way, we bring the skills to position you for the future and build the
					platforms to take you there. From strategic consulting to engineering at scale, we work across the
					full digital transformation spectrum to give you the right services at the right time. The result? A
					smooth flow from the right ideas to real results—faster, at scale, with no handoffs.
				</p>
			</Layout>
		);
	}
}
