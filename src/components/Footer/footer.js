import React from 'react';
import './footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import phone from '../../images/icons/phone.svg';
import location from '../../images/icons/location.svg';
import email from '../../images/icons/email.svg';
import fb from '../../images/icons/fb.svg';
import twitter from '../../images/icons/twitter.svg';
import instagram from '../../images/icons/instagram.svg';
import tg from '../../images/icons/tg.svg';

export default function Footer() {
	return (
		<div className="footer">
			<Container>
				<Row>
					<Col xs={12} sm={6} md={4}>
						<div className="footer-header">About</div>
						<div className="footer-list">
							<ul>
								<li>
									<a href="/about">About Us</a>
								</li>
								<li>
									<a href="/projects">Our Projects</a>
								</li>
								<li>
									<a href="/services">Services</a>
								</li>
								<li>
									<a href="/our-team">Our Team</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col xs={12} sm={6} md={4}>
						<div className="get-in-touch">
							<div className="footer-header">Get In Touch</div>
							<ul className="contacts">
								<li>
									<img src={phone} className="icon" />
									<span>
										<a href="tel:+99890 999 69 96">
										+99890 999 69 96
										</a>
										</span>
								</li>
								<li>
									<img src={location} className="icon" />
									<span>1, Chust str., Tashkent city, 100070</span>
								</li>
								<li>
									<img src={email} className="icon" />
									<span>
									<a href="mailto:info@raisense.uz">
										info@raisense.uz
									</a></span>
								</li>
							</ul>
						</div>
						<div className="social-list footer-social">
							<a className="social-item" href="https://www.facebook.com/raisense.uz/">
								<img src={fb} className="fb" />
							</a>
							<a className="social-item" href="https://www.instagram.com/raisense.uz/">
								<img src={twitter} />
							</a>
							<a className="social-item" href="https://t.me/raisense">
								<img src={instagram} />
							</a>
							<a className="social-item" href="#">
								<img src={tg} />
							</a>
						</div>
					</Col>
					<Col xs={12} sm={6} md={4}>
						<div className="map">
							<div className="footer-header">Location</div>

							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0052095235596!2d69.33053121538441!3d41.330500079269434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5c7e9986067%3A0xc89515564eb85edb!2zQy1TcGFjZSAo0LrQvtCy0L7RgNC60LjQvdCzINGG0LXQvdGC0YAp!5e0!3m2!1sru!2s!4v1574164181437!5m2!1sru!2s"
								frameBorder="0"
								width="100%"
								height="100%"
								style={{ border: '0' }}
								allowFullScreen=""
							/>
						</div>
					</Col>
				</Row>

				<div className="copyright">
					{' '}
					© {new Date().getFullYear()},
					{` `}
					All Right Reserved 2019, Raisense.
				</div>
			</Container>
		</div>
	);
}
