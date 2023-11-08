import React, { useState } from 'react';
import './App.css';

function App() {
  /*
    1.  Make an n x m matrix, where n represents the num of columns, m represents the num of rows.
    2.  Draw a board based on the Matrix.
    3.  Get cell position when clicking on a cell.
    4.  When clicking on a cell, set the 'player' value to the active player.
    5.  Draw a disk in the clicked cell, but draw disks in different colors for the players, prevent overwriting the existing disks, set hover effect when cell is avaliable.
    6.  Check if there is available cell.
    7.  Check horizontally if active player won.
    8.  Check vertically if active player won.
  */

  const [activePlayer, setActivePlayer] = useState('A');
  const [isAvailableCell, setIsAvailableCell] = useState(true);

  function makeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, player: '' }))
    return matrix;
  };

  const [matrix, setMatrix] = useState(makeMatrix(5, 5));

  function handleClick(x, y) {
    updateCellState(x, y);
    checkIsAvaliableCell();
    checkHorizontal(x, y)
    checkVertical(x, y);
  }

  function updateCellState(x, y) {
    let newMatrix = [...matrix];
    if (newMatrix[y][x].player === '') {
      newMatrix[y][x].player = activePlayer;
      setActivePlayer(newMatrix[y][x].player === 'A' ? 'B' : 'A');
    }
    setMatrix(newMatrix);
  }

  function checkHorizontal(x, y) {
    let startX = x;
    let count = 0;

    for (let i = x; i > 0; i--) {
      if (matrix[y][i].player === '' || matrix[y][i].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }
      startX = i;
    }

    for (let k = startX; k < matrix[0].length; k++) {
      count++;

      if (count >= 5) {
        console.log(activePlayer === 'A' ? 'Player-A won!' : 'Player-B won!')
      }

      if (!matrix[y][k + 1] || matrix[y][k].player !== matrix[y][k + 1].player) {
        break;
      }
    }
  }

  function checkVertical(x, y) {
    let startY = y;
    let count = 0;

    for (let i = y; i >= 0; i--) {
      if (matrix[i][x].player === '' || matrix[i][x].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }
      startY = i;
    }

    for (let k = startY; k < matrix.length; k++) {
      count++

      if (count >= 5) {
        console.log(activePlayer === 'A' ? 'Player-A won!' : 'Player-B won!')
      }

      if (!matrix[k + 1] || matrix[k][x].player !== matrix[k + 1][x].player) {
        break;
      }
    }
  }

  function checkIsAvaliableCell() {
    let isAvailableCell = false;
    for (let row of matrix) {
      for (let cell of row) {
        if (cell.player === '') {
          isAvailableCell = true;
          break;
        }
      }
    }
    if (!isAvailableCell) {
      setIsAvailableCell(false);
    }
  }

  return (
    <div className="App">
      <div className='who-won'>{!isAvailableCell ? 'No winner' : 'Good luck!'}</div>
      <div className='board'>
        {
          matrix.map((row, rIndex) =>
            <div className='row' key={rIndex}>
              {
                row.map((cell, cIndex) =>
                  <div className='cell' key={cIndex} onClick={() => handleClick(cIndex, rIndex)} style={matrix[rIndex][cIndex].player ? { backgroundColor: 'unset' } : {}}>
                    {matrix[rIndex][cIndex].player === '' ? <></> : matrix[rIndex][cIndex].player === 'A' ? <div className='disk disk-A'>{`${cIndex}/${rIndex}`}</div> : <div className='disk disk-B'>{`${cIndex}/${rIndex}`}</div>}
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
