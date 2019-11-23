import React, { Component } from 'react';
import './services.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ServicesList extends Component {
	state = {
		servicesList: this.props.data
	};
	render() {
		if (this.state.servicesList) {
			return (
				<div>
					<h1>Services</h1>
					<Row>
						{this.state.servicesList.map((service, index) => {
							
							return (
								<Col xs={12} sm={6} md={4} md={3} key={index}>
									<div className="service">
										<div className="service-img">
											<img src={service.data.image.url} />
										</div>
										<div className="service-desc">
											<div className="service-name">{service.data.name.text}</div>
											<div className="service-desc">{service.data.description.text}</div>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
			);
		}
		return (
			<div>
				<h1>No data!</h1>
			</div>
		);
	}
}
