import React, { Component } from 'react';
import { createDate } from '../../utils';
import './display.scss';


const VIEWS = {
  TIME: 1,
  DATE: 2,
  DAY: 3
}

export default class Display extends Component {
	i=1;

	state = {
		date: new Date(),
		currView: VIEWS.TIME, // 1, 2, 3
		views: ['time', 'date', 'day']
	}
	

	tick = () => {
    this.setState({
      date: new Date()
    });
	}
	componentDidMount = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }


	onViewHandler = () => {
		const viewsCount = this.state.views.length;	

    if(this.i < viewsCount) {
			this.i++
		}
		else {
      this.i = 1
		}
		
    this.setState({
      currView: this.i
		})
  }

	filterView = () => {
		let currView = this.state.currView;

		switch (currView) {
			case VIEWS.TIME:
				return createDate('time');
				break;	
			case VIEWS.DATE:
			  return createDate('date');
				break;
			case VIEWS.DAY:
				return createDate('day');
				break;
			default:
				return "error";
		}
  }

	render() {
		const showClock = this.filterView();

		return (
			<div className='clock'
					 onClick={() => this.onViewHandler()} >

				<h1 className={'time'}>
					{showClock}
				</h1>
			</div>
		)
	}
}