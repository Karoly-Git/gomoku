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
    9.  Check diagonal-A is active player won.
    10. Check diagonal-B is active player won.
    11. Add a reset button to restart game.
  */

  const winCount = 3;

  const [activePlayer, setActivePlayer] = useState('A');
  const [isAvailableCell, setIsAvailableCell] = useState(true);
  const [isThereWinner, setIsThereWinner] = useState(false);

  function makeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, player: '' }))
    return matrix;
  };

  const [matrix, setMatrix] = useState(makeMatrix());

  function handleClick(x, y) {
    updateCellState(x, y);
    checkIsAvaliableCell();

    checkHorizontal(x, y)
    checkVertical(x, y);
    checkDiagonal_A(x, y);
    checkDiagonal_B(x, y);
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

    for (let i = x; i >= 0; i--) {
      if (matrix[y][i].player === '' || matrix[y][i].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }

      startX = i;
    }

    for (let k = startX; k < matrix[0].length; k++) {
      count++;

      if (count >= winCount) {
        console.log(activePlayer === 'A' ? 'Player-A won!' : 'Player-B won!');
        setIsThereWinner(true);
        break;
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

      if (count >= winCount) {
        console.log(activePlayer === 'A' ? 'Player-A won!' : 'Player-B won!');
        setIsThereWinner(true);
        break;
      }

      if (!matrix[k + 1] || matrix[k][x].player !== matrix[k + 1][x].player) {
        break;
      }
    }
  }

  function checkDiagonal_A(x, y) {
    let count = 0;

    let indexX = x;
    let indexY = y;

    let startX;
    let startY;

    while (indexX >= 0 && indexY >= 0) {
      if (matrix[indexY][indexX].player === '' || matrix[indexY][indexX].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }

      startX = indexX;
      startY = indexY;

      indexX--;
      indexY--;
    }

    while (startX < matrix[0].length && startY < matrix.length) {
      if (matrix[startY][startX].player === '' || matrix[startY][startX].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }

      count++;

      if (count >= winCount) {
        console.log(activePlayer === 'A' ? 'Player-A won!' : 'Player-B won!');
        setIsThereWinner(true);
        break;
      }

      startX++;
      startY++;
    }
  }

  function checkDiagonal_B(x, y) {
    let count = 0;

    let indexX = x;
    let indexY = y;

    let startX;
    let startY;

    while (indexX < matrix[0].length && indexY >= 0) {
      if (matrix[indexY][indexX].player === '' || matrix[indexY][indexX].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }

      startX = indexX;
      startY = indexY;

      indexX++;
      indexY--;
    }

    while (startX >= 0 && startY < matrix.length) {
      //console.log(startX, startY);
      if (matrix[startY][startX].player === '' || matrix[startY][startX].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }

      count++;

      if (count >= winCount) {
        console.log(activePlayer === 'A' ? 'Player-A won!' : 'Player-B won!');
        setIsThereWinner(true);
        break;
      }

      startX--;
      startY++;
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

  function resetBoard() {
    setIsThereWinner(false);
    setIsAvailableCell(true);
    setMatrix(makeMatrix());
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
                  <div
                    className='cell'
                    key={cIndex}
                    onClick={() => handleClick(cIndex, rIndex)}
                    style={{
                      backgroundColor: matrix[rIndex][cIndex].player ? 'unset' : '',
                      pointerEvents: isThereWinner ? 'none' : ''
                    }}
                  >
                    {matrix[rIndex][cIndex].player === '' ? <></> : matrix[rIndex][cIndex].player === 'A' ? <div className='disk disk-A'>{`${cIndex}/${rIndex}`}</div> : <div className='disk disk-B'>{`${cIndex}/${rIndex}`}</div>}
                  </div>
                )
              }
            </div>
          )
        }
      </div>
      <button className='reset-btn' onClick={resetBoard}>Reset</button>
    </div>
  );
}

export default App;
