const winnerPositions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];


const fillCell = (state, index) => {
  let { winner, currentTurn } = state;
  const { cells } = state;
  if (cells[index] !== null) {
    return;
  }
  if (winner !== null) {
    return;
  }

  const mark = currentTurn % 2 === 1 ? 'X' : 'O';
  cells[index] = mark;
  currentTurn += 1;
  winner = this.checkWinner(cells);
  this.setState({
    cells,
    currentTurn,
    winner,
  });
};

const checkWinner = (cells) => {
  for (const position of winnerPositions) {
    const [a, b, c] = [...position];
    if (cells[a] !== null
           && cells[a] === cells[b]
           && cells[b] === cells[c]
    ) {
      return cells[a];
    }
  }
  return null;
};
