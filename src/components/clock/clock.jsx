import React, { Component } from 'react';
import { getRandomColor } from '../utils';
import Display from './display';
import './clock.scss';


export default class Clock extends Component {
  state = {
    isClick: false
  }

  onBgChanges = () => {
    this.setState({
      isClick: true
    })

    const newColor = getRandomColor();
    return newColor;
  }

  render() {
    const styles = {
      background: this.state.isClick ? getRandomColor() : this.onBgChanges()
    }
    return (
      <div style={styles}
           onClick={() => this.onBgChanges()}>
        <Display />
      </div>
    );
  };
};
