import { Component } from 'react';
import './RectangleText.css';
import MiddleBeansLogo from './beans_logo.svg';


class RectangleText extends Component {


	render() {
		return (
			<div className='rectangle-text' id='about'>
				<div className='about'>About Us</div>
				<img className='middle-beans-logo' src={MiddleBeansLogo} alt="" />
					<p className='first'>
					Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					Afraid at highly months do things on at. Situation recommend objection do intention
					so questions. As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.
					</p>
					<p className='second'>						
					Now residence dashwoods she excellent you. Shade being under his bed her, Much
					read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
					horrible but confined day end marriage. Eagerness furniture set preserved far
					recommend. Did even but nor are most gave hope. Secure active living depend son
					repair day ladies now.
					</p>
			</div>
		);
	}
}

export default RectangleText;