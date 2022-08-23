import { Component } from 'react';
import CoffeePageMiddleText from './CoffeePageMiddleText/CoffeePageMiddleText';
import CoffeePageRectangle from './CoffePageRectangle/CoffePageRectangle';

class CoffePage extends Component {

	render() {
		return (
			<div>
				<CoffeePageRectangle />
				<CoffeePageMiddleText />
			</div>
		);
	}
}

export default CoffePage;