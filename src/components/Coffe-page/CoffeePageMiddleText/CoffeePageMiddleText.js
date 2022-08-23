import { Component } from 'react';
import './CoffeePageMiddleText.css';
import { ReactComponent as CoffeeBeans } from '../../Main-page/MiddleRectangle/RectangleText/beans_logo.svg';
import CoffeItems from '../../Main-page/RectangleEnd/CoffeItems/CoffeItems';
import  CoffeeProduct from './coffee_products.svg'


class CoffeePageMiddleText extends Component {

	render() {
		return (
			<div>
				<div className='coffee-page-middle-text'>
					<div className='coffee-page-middle-text-img'></div>
					<div className='coffee-page-middle'>
						<div className='coffee-page-middle-about'>About our goods</div>
						<CoffeeBeans />
						<div className='coffee-page-middle-text-paragraphs'>
							<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
							<p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
							<p>As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
						</div>
					</div>
				</div>
				<div className='coffee-page-middle-text-line'></div>
				<div className='coffee-page-middle-products'>
				<div className='coffee-page-search-filter'>
					<div className='coffee-page-search'>
						<span>Lookiing for</span>
						<input type="text" placeholder='start typing here...' />
					</div>
					<div className='coffee-page-filter'>
						<span className='coffee-page-filter-text'>Or filter</span>
						<span className='coffee-page-buttons'>
							<button>Brazil</button>
							<button>Kenya</button>
							<button>Columbia</button>
						</span>
					</div>
				</div>
					<div className='coffee-page-products'>
						<div className='coffee-page-product'>
							<CoffeItems logo={CoffeeProduct} about='AROMISTICO Coffee 1 kg' price='6.99$' country='Brazil'  />
						</div>
						<div className='coffee-page-product'>
							<CoffeItems logo={CoffeeProduct} about='AROMISTICO Coffee 1 kg' price='6.99$' country='Kenya'  />
						</div>
						<div className='coffee-page-product'>
							<CoffeItems logo={CoffeeProduct} about='AROMISTICO Coffee 1 kg' price='6.99$' country='Columbia'  />
						</div>
						<div className='coffee-page-product'>
							<CoffeItems logo={CoffeeProduct} about='AROMISTICO Coffee 1 kg' price='6.99$' country='Brazil'  />
						</div>
						<div className='coffee-page-product'>
							<CoffeItems logo={CoffeeProduct} about='AROMISTICO Coffee 1 kg' price='6.99$' country='Brazil'  />
						</div>
						<div className='coffee-page-product'>
							<CoffeItems logo={CoffeeProduct} about='AROMISTICO Coffee 1 kg' price='6.99$' country='Brazil'  />
						</div>
				</div>
				</div>
			</div>
		);
	}
}

export default CoffeePageMiddleText;