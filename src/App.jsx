import React from 'react';
import { connect } from 'react-redux';

const App = ({ cells, winner, currentTurn, dispatch }) => {
  const getCellText = value => value || '';
  return (
    <div>
      <h1 className="Title">
      Tic Tac Toe
        { winner ? `(Winner ${winner})` : `(turn ${currentTurn})`}
      </h1>

      <div className="Ceil-container">

        {cells.map((cell, i) => (
          <span
            key={i}
            className="Cell"
            onClick={() => dispatch({
              type: "TURN",
              index: i,
            })}
          >
            {getCellText(cell)}
          </span>
        ))}
      </div>
      <button
        onClick={() => dispatch ({
          type: 'RESET',
        })}
        type="button"
        className="Restart-Btn"
      >
      Restart
      </button>
    </div>
  );
}


const mapState = ({ cells, currentTurn, winner }) => ({
  cells,
  currentTurn,
  winner,
});

const mapDispatch = (dispatch) => ({
  dispatch,
});

const connectedApp = connect(
  mapState,
  mapDispatch,
)(App);

export default connectedApp;
