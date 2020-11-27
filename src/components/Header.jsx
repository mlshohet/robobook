import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}


	render() {
		return (
			<div>
				<h1 className='tc f1'>ROBOBOOK</h1>
				<CounterButton />
			</div>
		);
	}
}

export default Header;