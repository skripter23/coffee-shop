import { Component } from 'react';
import CoffeItems from './CoffeItems/CoffeItems';
import './RectangleEnd.css';
import SolimoLogo from './CoffeItems/solimo.png';
import PrestoLogo from './CoffeItems/presto.png';
import AromisticoLogo from './CoffeItems/aromistico.png'


class RectangleEnd extends Component {


	render() {
		return (
			<div className='rectangle-end'>
				<div className='our-best-div'>Our best</div>
				<div className='coffee-items'>
					<CoffeItems price='10.73$' about='Solimo Coffee Beans 2 kg' logo={SolimoLogo} />
					<CoffeItems price='15.99$' about='Presto Coffee Beans 1 kg' logo={PrestoLogo} />
					<CoffeItems price='6.99$' about='AROMISTICO Coffee 1 kg' logo={AromisticoLogo} />
				</div>
			</div>
		)
	}
}

export default RectangleEnd;