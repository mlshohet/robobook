import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render Card component', () => {
	const mockRobots = [
		{
			id:1,
			name: 'John Snow',
			username: 'bastard',
			email: 'jon@email.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});


