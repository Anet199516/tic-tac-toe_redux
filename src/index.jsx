import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

const initialState = {
  cells: Array(9).fill(null),
  currentTurn: 1,
  winner: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TURN':
      return {};
    case 'RESET':
      return {};
    default: return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();
