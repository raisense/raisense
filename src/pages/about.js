import React, { Component } from 'react';
import Layout from '../components/layout';
// var PrismicDOM = require('prismic-dom');
// var Elements = PrismicDOM.RichText.Elements;

// var htmlSerializer = function(type, element, content, children) {
// 	switch (type) {
// 		// Add a class to paragraph elements
// 		case Elements.paragraph:
// 			return '<p class="paragraph-class">' + children.join('') + '</p>';

// 		// Don't wrap images in a <p> tag
// 		case Elements.image:
// 			return '<img src="' + element.url + '" alt="' + element.alt + '">';

// 		// Add a class to hyperlinks
// 		case Elements.hyperlink:
// 			var target = element.data.target ? 'target="' + element.data.target + '" rel="noopener"' : '';
// 			var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
// 			return '<a class="some-link"' + target + ' href="' + linkUrl + '">' + content + '</a>';

// 		// Return null to stick with the default behavior for all other elements
// 		default:
// 			return null;
// 	}
// };

export default class About extends Component {
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
