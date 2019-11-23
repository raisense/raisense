import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './slider.css';

export default class Slider extends Component {
	state = {
		sliders: this.props.data
	};

	render() {
		const params = {
			autoplay: {
				delay: 5000
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination'
			},
			breakpoints: {}
		};
		return (
			<div className="slider">
				<Swiper {...params}>
					{this.state.sliders.map((slider, index) => {
						return (
							<img
								key={index}
								src={slider.data.image.localFile.childImageSharp.fluid.src}
								srcSet={slider.data.image.localFile.childImageSharp.fluid.srcSet}
								sizes={slider.data.image.localFile.childImageSharp.fluid.sizes}
								alt={slider.data.title.text}
							/>
						);
					})}
				</Swiper>
			</div>
		);
	}
}
