import { Component } from 'react';
import './CoffePageRectangle.css';
import Header from '../../Main-page/Rectangle/Header/Header';


class CoffeePageRectangle extends Component {

	render() {
		return (
			<div className='coffee-page-rectangle'>
				<Header color='white' />
				<div className='coffee-page-rectangle-text'>Our Coffee</div>
			</div>	
		);
	}
}

export default CoffeePageRectangle;