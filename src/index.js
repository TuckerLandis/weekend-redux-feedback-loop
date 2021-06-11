import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


/// Reducers
const feedBackReducer = (state = [], action) => {
// if (action.type === 'POST_FEEDBACK') 



    return state
}

/// Store

const reduxStore = createStore(
    combineReducers({
      feedBackReducer
    }),
    applyMiddleware(logger)
  );


// Render
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
