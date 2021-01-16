import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';

// Redux setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Redux thunk import
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
