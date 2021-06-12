import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  Provider
} from 'react-redux';
import logger from 'redux-logger';


import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import feedbackLocal from './feedback.data'

/// Reducers
const feedBackReducer = (state = [], action) => {

  if (action.type === 'ADD_FEELING') {

  }

  switch (action.type) {
    case 'ADD_FEELING':
      feedbackLocal.feeling = action.payload

    break;
    case 'ADD_UNDERSTANDING':
    feedbackLocal.understanding = action.payload

    break;
    case 'ADD_SUPPORTED':
    feedbackLocal.supported = action.payload

    break;
    case 'ADD_COMMENTS':
    feedbackLocal.comments = action.payload
  
    break;
    case 'SUBMIT_FEEDBACK':
    /// axios post -- but not here?
    break;
  }
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
 ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();