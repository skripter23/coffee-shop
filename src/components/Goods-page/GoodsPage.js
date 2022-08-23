import { Component } from 'react';
import GoodsPageMiddleText from './GoodsPageMiddleText/GoodsPageMiddleText';
import GoodsPageRectangle from './GoodsPageRectangle/GoodsPageRectangle';

class GoodsPage extends Component {

	render() {
		return (
			<div>
				<GoodsPageRectangle />
				<GoodsPageMiddleText />
			</div>
		);
	}
}

export default GoodsPage;