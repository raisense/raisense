import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';
// import Img from 'gatsby-image';
import './header.css';

const Header = () => {
	return (
		<header
			style={{
				marginBottom: `1.45rem`
			}}
		>
			<Container>
				<div className="slogan">
					We deliver IT-products that actually <span className="main-color"> RAISE </span>you up and optimize
					business processes up to the point that makes <span className="main-color"> SENSE</span>
				</div>
			</Container>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
