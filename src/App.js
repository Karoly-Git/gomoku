// React Imports
import React, { useState, useRef } from 'react';

// Component Impors
import Developer from './components/Developer';

// Style Imports
import './App.css';

// Icon Imports
import { BsFillGearFill as GearIcon } from 'react-icons/bs';
import { MdDone as DoneIcon } from 'react-icons/md';
import { AiOutlineClose as XIcon } from 'react-icons/ai';
import { BsCircle as OIcon } from 'react-icons/bs';

// Function Imports
import { checkHorizontal, checkVertical, checkDiagonalA, checkDiagonalB, updateCellState, checkIsAvaliableCell, startNewGame } from './js/gameLogic'

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
    16. Adding custom cursor.
  */

  const winCount = 5;

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [activePlayer, setActivePlayer] = useState('A');

  const [isAvailableCell, setIsAvailableCell] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [isCursor, setIsCursor] = useState(false);

  const [playerA, setPlayerA] = useState('Player - A');
  const [playerB, setPlayerB] = useState('Player - B');

  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  const refA = useRef();
  const refB = useRef();

  const [isOpenBoxA, setIsOpenBoxA] = useState(false);
  const [isOpenBoxB, setIsOpenBoxB] = useState(false);

  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  function initializeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, player: '' }))
    return matrix;
  };

  const [matrix, setMatrix] = useState(initializeMatrix());

  function handleCellClick(x, y) {
    updateCellState(x, y, matrix, setMatrix, activePlayer, setActivePlayer);
    checkIsAvaliableCell(matrix, setIsAvailableCell);
    checkHorizontal(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner)
    checkVertical(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner);
    checkDiagonalA(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner);
    checkDiagonalB(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner);
  }

  function handleResetClick() {
    startNewGame(setIsWinner, setIsAvailableCell, setMatrix, initializeMatrix, activePlayer, setActivePlayer)
  }

  function handleMouseMove(e) {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }


  return (
    <div className="App" onMouseMove={handleMouseMove}>

      {isCursor && isAvailableCell && !isWinner &&
        <div className='cursor' style={{ top: `${cursorPosition.y - 20}px`, left: `${cursorPosition.x + 20}px` }}>
          {activePlayer === 'A' ? playerA : playerB}
        </div>
      }

      <header style={isWinner || !isAvailableCell ? { backgroundColor: 'yellow' } : { backgroundColor: 'gray' }}>
        <div
          className='who-won'
          style={isWinner || !isAvailableCell ? { color: 'black' } : { color: 'white' }}
        >{isWinner ? activePlayer === 'A' ? `${playerB} won!` : `${playerA} won!` : !isAvailableCell ? 'No winner!' : 'Good luck!'}
        </div>
      </header>

      <main>

        <div className='player-house'>
          <div className='frame'>
            <h2>
              <span className='player-color-sign'></span>
              {playerA}
            </h2>
            <h3>
              Score: {scoreA}
            </h3>
            <div className='icon-box'>
              <GearIcon onClick={() => {
                setIsOpenBoxA(true);
                refA.current.focus()
              }}
                className='icon' />
            </div>
            <div className='settings-box' style={{ opacity: `${isOpenBoxA ? '1' : '0'}` }}>
              <input ref={refA} onChange={(e) => setInputA(e.target.value)} className='name-input' placeholder='Name...'></input>
              <DoneIcon
                onClick={() => {
                  setPlayerA(inputA === '' ? 'Player - A' : inputA);
                  setIsOpenBoxA(false)
                }} className='icon'
              />
            </div>
          </div>
        </div>

        <div className='board' onMouseEnter={() => setIsCursor(true)} onMouseLeave={() => setIsCursor(false)}>
          {
            matrix.map((row, rIndex) =>
              <div className='row' key={rIndex}>
                {
                  row.map((cell, cIndex) =>
                    <div
                      className='cell'
                      key={cIndex}
                      onClick={() => handleCellClick(cIndex, rIndex)}
                      style={{
                        backgroundColor: matrix[rIndex][cIndex].player ? 'unset' : '',
                        pointerEvents: isWinner ? 'none' : ''
                      }}
                    >
                      {matrix[rIndex][cIndex].player === '' ? <></> : matrix[rIndex][cIndex].player === 'A' ? <div className='disk disk-A'><OIcon className='icon' />{/*`${cIndex}/${rIndex}`*/}</div> : <div className='disk disk-B'><XIcon className='icon' />{/*`${cIndex}/${rIndex}`*/}</div>}
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
              Score: {scoreB}
            </h3>
            <div className='icon-box'>
              <GearIcon onClick={() => {
                setIsOpenBoxB(true);
                refB.current.focus()
              }}
                className='icon' />
            </div>
            <div className='settings-box' style={{ opacity: `${isOpenBoxB ? '1' : '0'}` }}>
              <input ref={refB} onChange={(e) => setInputB(e.target.value)} className='name-input' placeholder='Name...'></input>
              <DoneIcon
                onClick={() => {
                  setPlayerB(inputB === '' ? 'Player - B' : inputB);
                  setIsOpenBoxB(false)
                }} className='icon'
              />
            </div>
          </div>
        </div>

      </main>

      <footer>
        <button className='reset-btn' onClick={handleResetClick}>New Game</button>
        {!false && <Developer />}
      </footer>
    </div >
  );
}

export default App;
