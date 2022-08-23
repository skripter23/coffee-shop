import './MiddleRectangle.css';
import { Component } from 'react';
import RectangleText from './RectangleText/RectangleText';


class MiddleRectangle extends Component {

	render() {
		return (
			<div className='middle-rectangle'>
				<RectangleText />
			</div>
		)
	}
}

export default MiddleRectangle;