import React, { Component } from 'react';
import { createDate } from '../utils';
import Display from './display';
import './clock.scss';


const VIEWS = {
  TIME: 1,
  DATE: 2,
  DAY: 3
}

export default class Clock extends Component {
	i=1

  state = {
		views: ['time', 'date', 'day'],
		currView: VIEWS.TIME, // 1, 2, 3
		//date: new Date()
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
				//setInterval(createDate('time'), 1000); //???
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
      <div>
        <Display 
          onViewHandler={this.onViewHandler}
          showClock={showClock}
        />
      </div>
    );
  };
};
