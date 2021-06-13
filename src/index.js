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
import dbFeedback from './reducers/dbFeedback';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers({
    localFeedback,
    dbFeedback
  }),
  applyMiddleware(logger)
);

 ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();