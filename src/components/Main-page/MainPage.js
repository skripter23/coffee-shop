import { Component } from 'react';
import MiddleRectangle from '../Main-page/MiddleRectangle/MiddleRectangle';
import Rectangle from '../Main-page/Rectangle/Rectangle';
import RectangleEnd from '../Main-page/RectangleEnd/RectangleEnd';

class MainPage extends Component {

	render() {
		return (
			<div>
				<Rectangle />
          		<MiddleRectangle />
          		<RectangleEnd />
			</div>
		);
	}
}

export default MainPage;