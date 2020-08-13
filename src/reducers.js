// Import the action type to be used by reducer
import {
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED
	} from './constants';


// Initial state for the Search box
const initialState = {
	searchField: ''
}

// Initial state for the robot API call
const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

// Reducer for the Search Box
// Receives an action and then acts upon the state
export const searchRobots = (state=initialState, action={}) => {
	//Redux receommends 'switch' not if
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
		// Return new state if action is of the above type
		// Create a new state object with the modifications
		// action is an object with payload as property
		// Standard Redux syntax
		// Third parameter is the state object
			return Object.assign({}, state, { searchField : action.payload });
		default:
			return state;
	}
}

// Reducer for the fetch of robots (ASYNC)

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending : true });
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots : action.payload, isPending : true });
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error : action.payload, isPending : false });
		default:
			return state;
	}
}



