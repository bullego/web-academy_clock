import React, { Component } from 'react';
import './clock.scss';

const Clock = ({showClock, onViewHandler, bgColor}) => {
	
	let classNames = ' ';

	if(bgColor === 'grey') {
		classNames += ' grey'
	}
	if(bgColor === 'white') {
		classNames += ' white'
	}
	if(bgColor === 'orange') {
		classNames += ' orange'
	}

		return (
			<div className={`clock ${classNames}`}
					 onClick={() => onViewHandler()} >

				<h1 className={'time'}>
					{showClock}
				</h1>

			</div>
		)
}

export default Clock;
