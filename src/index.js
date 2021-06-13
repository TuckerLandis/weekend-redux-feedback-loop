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

import localFeedback from './reducers/localFeedback';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


/// Reducers


/// Store

const store = createStore(
  combineReducers({
    localFeedback
  }),
  applyMiddleware(logger)
);


// Render
 ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();