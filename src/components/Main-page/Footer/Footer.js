import { Component } from 'react';
import './Footer.css';
import Header from '../Rectangle/Header/Header'
import { ReactComponent as BeansLogo } from '../MiddleRectangle/RectangleText/beans_logo.svg';

class Footer extends Component {

	render() {
		return (
			<div className='footer'>
				<div className='header-footer'>
					<div className='header-footer-div'>
						<Header color='black' />
					</div>
				</div>
				<div className='beans-logo'>
					<BeansLogo />
				</div>
			</div>
		);
	}
}

export default Footer;