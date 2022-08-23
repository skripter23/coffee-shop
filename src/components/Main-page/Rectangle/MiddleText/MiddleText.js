import { Component } from 'react';
import './MiddleText.css';
import BeansLogo from './beans_logo.svg';
import { Link } from 'react-scroll';

class MiddleText extends Component {

	render() {
		return (
			<div>
				<div className='middle-text'>
					<div className='central-text'>Everything You Love About Coffee</div>
					<br />
					<img src={BeansLogo} alt="" className='beans_logo' />
					<br />
					<div className='central-afterlogo-text'>We makes every day full of energy and taste</div>
					<br />
					<div className='central-afterlogo-text second' >Want to try our beans?</div>
					<br />
					<Link to="about" spy={true} smooth={true} offset={-60} duration={500} className='more-button'>More</Link>
				</div>
			</div>
		);
	}
}

export default MiddleText;