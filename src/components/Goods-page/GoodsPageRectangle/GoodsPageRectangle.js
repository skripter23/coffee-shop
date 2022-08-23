import { Component } from 'react';
import './GoodsPageRectangle.css';
import Header from '../../Main-page/Rectangle/Header/Header';


class GoodsPageRectangle extends Component {

	render() {
		return (
			<div className='goods-page-rectangle'>
				<Header color='white' />
				<div className='goods-page-rectangle-text'>For your pleasure</div>
			</div>	
		);
	}
}

export default GoodsPageRectangle;