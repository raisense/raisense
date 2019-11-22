import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './partners.css';

export default class Partners extends Component {
	state = {
		partners: this.props.data
	};

	render() {
		console.log(this.state.partners);
		const params = {
			spaceBetween: 30,
			autoplay: {
				delay: 3000
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},

				720: {
					slidesPerView: 4
				}
			}
		};
		if (this.state.partners) {
			return (
				<div className="partners">
					<h1>Partners</h1>
					<Swiper {...params}>
						{this.state.partners.map((partner, index) => {
							return (
								<div key={index}>
									<img src={partner.data.image.url} />
								</div>
							);
						})}
					</Swiper>
				</div>
			);
		}
		return (
			<div>
				<h1>No partners</h1>
			</div>
		);
	}
}
