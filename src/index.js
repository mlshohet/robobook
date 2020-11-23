import React from 'react';
import ReactDOM from 'react-dom';

// Provider component from redux to pass the store, so it is hidden from App
import { Provider } from 'react-redux';

// create store creates the app store from redux package
import { createStore, combineReducers } from 'redux';


// Redux Middleware
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';

// Thunk for async calls

import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/App';

// Must import reducers from the reducers file
import { searchRobots, requestRobots } from './reducers';

import 'tachyons';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

// Creating the Redux store
// store is a big object containing the state
// All reducers are combined here into the root reducer
// also creates middleware (logger here)
// Add all reducers here (COMBINE into root reducer)

const rootReducer = combineReducers( { searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


 // This is how the react-redux Provider passes down the store, not the App
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
