import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './partners.css';

import {OutboundLink} from "gatsby-plugin-gtag"

export default class Partners extends Component {
	state = {
		partners: this.props.data
	};

	render() {
		const params = {
			spaceBetween: 30,
			preventClicks: false,
			preventClicksPropagation: false,
			autoplay: {
				delay: 20000
			},
			loop: true,
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
									{partner.data.link ? (
										<OutboundLink href={partner.data.link.url}>
											<img src={partner.data.image.url} />
										</OutboundLink>
									) : (
										<a href="#">
											<img src={partner.data.image.url} />
										</a>
									)}
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
