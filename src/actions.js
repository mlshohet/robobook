import {
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED
		} from './constants';


export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});


// Use dispatch to gain the action
// no payload
//Also async call goes here as an action
//***  This is ASYNC API call technique for redux ***///
// Higher order function for THUNK
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			// Dispatches the data from API to redux according to action type, payload is here
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}));
}




