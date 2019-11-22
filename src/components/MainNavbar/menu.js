import React, { Component } from 'react';
import './menu.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/icons/raisense.svg';
import phone from '../../images/icons/phone.svg';
import email from '../../images/icons/email.svg';
import Container from 'react-bootstrap/Container';

export default class Menu extends Component {
	render() {
		return (
			<Container>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="/">
						<img src={logo} className="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/about">About Us</Nav.Link>
							<Nav.Link href="/services">Services</Nav.Link>
							<Nav.Link href="/projects">Projects</Nav.Link>
							<Nav.Link href="/our-team">Our Team</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">
								<img src={phone} className="icon" />
								+998 97 256 56 54
							</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								<img src={email} className="icon" />
								info@raisense.uz
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		);
	}
}
