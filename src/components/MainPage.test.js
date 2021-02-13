import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {  //comes with Jest, runs before each test
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps}/>)
});

it('renders mainPage', () => {
	expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@mail.com'
		}],
		searchField: 'o',
		isPending: false
	}

	const wrapper2 = shallow(<MainPage {...mockProps2}/>)


	expect(wrapper2.instance().filteredRobots([])) // instance comes with enzyme
		.toEqual(
			[{
			id: 3,
			name: 'John',
			email: 'john@mail.com'
		}]
		);

	// expect(wrapper2.instance().filteredRobots([]))
	// 	.toEqual([])
});


