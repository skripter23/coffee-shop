import { Component } from 'react';
import './CoffeItems.css';

class CoffeItems extends Component {

	render() {
		return (
			<div className='div-items'>
				<div className='coffee-item'>
					<img src={this.props.logo} alt="" />
					<div className='coffee-about'>{this.props.about}</div>
					<div className='coffee-country'>{this.props.country}</div>
					<div className='price'>{this.props.price}</div>
				</div>
			</div>
		);
	}
}

export default CoffeItems;