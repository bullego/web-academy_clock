import React, { Component } from 'react';
import Clock from './clock/clock';

export default class App extends Component {
  i=1

  state = {
    currView: 1, // 1, 2, 3
    bgColor: 'grey' // grey, white, orange 
  }

  onViewHandler = () => {
    let newBgColor;

    if(this.i < 3) {
      this.i++

      if(this.i === 2) {
        newBgColor = 'white'
      } else if(this.i === 3) {
        newBgColor = 'orange'
      }
    }
    else {
      this.i = 1
      newBgColor = 'grey'
    }
    
    this.setState({
      currView: this.i,
      bgColor: newBgColor
    })
  }

  filterView = () => {
    const d = new Date();

    if(this.state.currView === 1) {
      const v1 = d.toLocaleTimeString();
      return v1;
    } 
    else if (this.state.currView === 2) {
      const v2 = d.toLocaleDateString();
      return v2;
    } 
    else if (this.state.currView === 3) {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const day = days[d.getDay()].toString();
      const date = d.getDate().toString();
      const v3 = day + '/' + date;
      return v3;
    }
  }

  render() {
    const {bgColor} = this.state;
    const showClock = this.filterView();

    return (
      <div>
        <Clock 
          onViewHandler={this.onViewHandler}
          showClock={showClock}
          bgColor={bgColor}
        />
      </div>
    );
  };
};
