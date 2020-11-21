import React from 'react';

// Importing connect function, because App is smart container and needs to subscribe
// - Look to bottom for syntax
import { connect } from 'react-redux';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Clock from '../components/Clock';
import './App.css';

// Importing the actions for redux
import { setSearchField, requestRobots } from '../actions';


// The dispatch that App listens to
// the variable that's passed to the bottom function
// the searchField  property of the state in the 'searchRobots' reducer
// this is used as props

//*** Declares what piece of state to listen to***//

const mapStateToProps = state => {
	return {
		//The reducers and properties have to be specified here
		searchField: state.searchRobots.searchField, //This is the property from object that the reducer returns
		robots: state.requestRobots.robots,
		ispending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

//*** What props to listen to that are actions ***//

// Receives a dispatch (an action trigger) so the action can be sent
// into the reducer.
// Property is the prop that that the dispatch receives
// value is a function that listens for input (in this case)
// Returns an Object that contains all of the action
const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		// returns the specific reducer function that has a dispatch
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			clock: ''
		}
	}

//No constructor. All data received as props from redux

	componentDidMount() {
		this.props.onRequestRobots();
		fetch('http://worldtimeapi.org/api/ip')
		.then(response => {
			return response.json();
		})
		.then(clock => {
			const datetime = clock.datetime;
			this.setState({ clock: datetime })
		});
	}

	render() {
		const { searchField, onSearchChange, isPending, robots } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return isPending
		? <h1 className = 'tc'>LOADING...</h1>
		: (
			<div className = 'tc'>
				<Header />
				<SearchBox searchChange = {onSearchChange} />
				<ErrorBoundary>
					<Scroll>
						<CardList robots= {filteredRobots} />
					</Scroll>
				</ErrorBoundary>
				<Clock clock={this.state.clock}/>
			</div>
			);
	}
}

// Higher order function connect
// App subscribes to any changes in redux store
// THIS IS THE SUBSCRIPTION DECLARATION TO REDUX STATE MANAGEMENT
// Look above for which actions and which props App is subscribed to
export default connect(mapStateToProps, mapDispatchToProps)(App);


