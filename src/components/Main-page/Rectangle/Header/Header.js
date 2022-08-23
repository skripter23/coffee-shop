import { Component } from 'react';
import './Header.css';
import { ReactComponent as LogoImage } from './logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {



	render() {
		const style = {
			color: this.props.color,
			textDecoration: 'none'
		}

		return (
			<div className='main-page'>
				<div className="header">
					<Link to='/' style={style}>
						<div className="logo">
						<LogoImage fill={this.props.color} />
						<div style={{color: this.props.color}} className='logo-text'>Coffee house</div>
					</div>
					</Link>
					<Link to='/coffepage' style={style}>
						<div style={{color: this.props.color}} className="second-button">Our coffee</div>
					</Link>
					<Link to='/goodspage' style={style}>
						<div style={{color: this.props.color}} className="third-button">For your pleasure</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;