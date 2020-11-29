import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Clock from '../components/Clock';
import './MainPage.css';

class MainPage extends React.Component {

	constructor() {
		super();
		this.state = {
			clock: ''
		}
	}

	componentDidMount() {
		this.props.onRequestRobots();
		return fetch('https://worldtimeapi.org/api/ip')
		.then(response => response.json())
		.then(clock => {
			const datetime = clock.datetime;
			this.setState({ clock: datetime })
		}).catch(error => {
			console.log(error);
		});
	}

	filteredRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});
	}
	

	render() {
		const { onSearchChange, isPending, robots } = this.props;
		return (
			<div className = 'tc'>
				<Header />
				<SearchBox searchChange = {onSearchChange} />
					<Scroll>
						{ isPending ? <h1 className = 'tc'>LOADING...</h1>
						: <ErrorBoundary>
							<CardList robots= {this.filteredRobots()} />
							<Clock clock={this.state.clock}/>
						</ErrorBoundary>
						}
					</Scroll>
			</div>
		);
	}
}

export default MainPage;