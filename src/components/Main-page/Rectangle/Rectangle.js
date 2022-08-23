import { Component } from 'react';
import Header from './Header/Header';
import MiddleText from './MiddleText/MiddleText';
import './Rectangle.css';

class Rectangle extends Component {


	render() {
		return (
			<div className='rectangle'>
				<div className='bgc-image'>
					<Header color='white' />
					<MiddleText />
				</div>
			</div>
		);
	}
}

export default Rectangle;