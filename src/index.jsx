import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { fillCell } from './redux/logicForReducers/logicForReducers';

const initialState = {
  cells: Array(9).fill(null),
  currentTurn: 1,
  winner: null,
};

const reducer = (state = initialState, action) => {
  const newState = fillCell(state, action.index);
  switch (action.type) {
    case 'TURN':
      return {
        ...state,
        ...newState,
      };
    case 'RESET':
      return {
        cells: Array(9).fill(null),
        currentTurn: 1,
        winner: null,
      };
    default: return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
