// React Imports
import React, { useState } from 'react';

//Style Imports
import './App.css';

// Icon Imports
import { BsFillGearFill as GearIcon } from 'react-icons/bs';
import { MdDone as DoneIcon } from 'react-icons/md';
import { AiOutlineClose as XIcon } from 'react-icons/ai';

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
    12. Upon resetting the game, if there is a winner, then the winner starts next game.
    13. Display the winner on the headline.
    14. Adding player's boxes.
    15. Adding name setup option.
  */

  const winCount = 5;

  const [activePlayer, setActivePlayer] = useState('A');

  const [isAvailableCell, setIsAvailableCell] = useState(true);
  const [isThereWinner, setIsThereWinner] = useState(false);

  const [playerA, setPlayerA] = useState('Player - A');
  const [playerB, setPlayerB] = useState('Player - B');

  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  const [isBoxA_Open, setIsBoxA_Open] = useState(false);
  const [isBoxB_Open, setIsBoxB_Open] = useState(false);

  const [playerScoreA, setPlayerScoreA] = useState(0);
  const [playerScoreB, setPlayerScoreB] = useState(0);


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
        console.log(activePlayer === 'A' ? `${playerA} won!` : `${playerB} won!`);
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
        console.log(activePlayer === 'A' ? `${playerA} won!` : `${playerB} won!`);
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
        console.log(activePlayer === 'A' ? `${playerA} won!` : `${playerB} won!`);
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
      if (matrix[startY][startX].player === '' || matrix[startY][startX].player === (activePlayer === 'A' ? 'B' : 'A')) {
        break;
      }

      count++;

      if (count >= winCount) {
        console.log(activePlayer === 'A' ? `${playerA} won!` : `${playerB} won!`);
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
    setActivePlayer(activePlayer === 'A' ? 'B' : 'A'); // The winner starts next game.
  }

  return (
    <div className="App">

      <header>
        <div className='who-won'>{isThereWinner ? activePlayer === 'A' ? `${playerB} won!` : `${playerA} won!` : !isAvailableCell ? 'No winner!' : 'Good luck!'}</div>
      </header>

      <main>

        <div className='player-house'>
          <div className='frame'>
            <h2>
              <span className='player-color-sign'></span>
              {playerA}
            </h2>
            <h3>
              Score: {playerScoreA}
            </h3>
            <div className='icon-box'>
              <GearIcon onClick={() => setIsBoxA_Open(true)} className='icon' />
            </div>
            <div className='settings-box' style={{ opacity: `${isBoxA_Open ? '1' : '0'}` }}>
              <input onChange={(e) => setInputA(e.target.value)} className='name-input' placeholder='Name...'></input>
              <DoneIcon
                onClick={() => {
                  setPlayerA(inputA === '' ? 'Player - A' : inputA);
                  setIsBoxA_Open(false)
                }} className='icon'
              />
            </div>
          </div>
        </div>

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
                      {matrix[rIndex][cIndex].player === '' ? <></> : matrix[rIndex][cIndex].player === 'A' ? <div className='disk disk-A'>{/*`${cIndex}/${rIndex}`*/}</div> : <div className='disk disk-B'><XIcon className='icon' />{/*`${cIndex}/${rIndex}`*/}</div>}
                    </div>
                  )
                }
              </div>
            )
          }
        </div>

        <div className='player-house'>
          <div className='frame'>
            <h2>
              <span className='player-color-sign'></span>
              {playerB}
            </h2>
            <h3>
              Score: {playerScoreB}
            </h3>
            <div className='icon-box'>
              <GearIcon onClick={() => setIsBoxB_Open(true)} className='icon' />
            </div>
            <div className='settings-box' style={{ opacity: `${isBoxB_Open ? '1' : '0'}` }}>
              <input onChange={(e) => setInputB(e.target.value)} className='name-input' placeholder='Name...'></input>
              <DoneIcon
                onClick={() => {
                  setPlayerB(inputB === '' ? 'Player - B' : inputB);
                  setIsBoxB_Open(false)
                }} className='icon'
              />
            </div>
          </div>
        </div>

      </main>

      <footer>
        <button className='reset-btn' onClick={resetBoard}>Reset</button>
      </footer>

    </div>
  );
}

export default App;
