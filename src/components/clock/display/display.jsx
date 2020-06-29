import React, { Component } from 'react';
import {getRandomColor} from '../../utils';
import './display.scss';


export default class Display extends Component {
	state = {
		
	}
	

	render() {
		const styles = {
			background: getRandomColor()
		}
		const {showClock, onViewHandler} = this.props;
		//setInterval(showClock, 1000);

		return (
			<div className='clock' style={styles}
					 onClick={() => onViewHandler()} >

				<h1 className={'time'}>
					{showClock}
				</h1>
			</div>
		)
	}
}