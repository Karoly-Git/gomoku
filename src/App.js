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
import { checkHorizontal, checkVertical, checkDiagonalA, checkDiagonalB } from './js/winConditionChecks'
import { updateCellState, checkIsAvaliableCell, startNewGame } from './js/boardStateUpdates'
import { initializeMatrix } from './js/initializeMatrix'

function App() {

  // Constants
  const winCount = 3;

  // State Hooks //
  // Game State Hooks
  const [matrix, setMatrix] = useState(initializeMatrix());

  // Cursor State Hooks
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursor, setIsCursor] = useState(false);

  // Player State Hooks
  const [activePlayer, setActivePlayer] = useState('A');
  const [isAvailableCell, setIsAvailableCell] = useState(true);
  const [isWinner, setIsWinner] = useState(false);

  // Player Settings State Hooks
  const [playerA, setPlayerA] = useState('Player - A');
  const [playerB, setPlayerB] = useState('Player - B');
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  // Refs
  const refA = useRef();
  const refB = useRef();

  // Settings State Hooks
  const [isOpenBoxA, setIsOpenBoxA] = useState(false);
  const [isOpenBoxB, setIsOpenBoxB] = useState(false);

  // Score State Hooks
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  // Event Handlers
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
        <Developer />
      </footer>
    </div >
  );
}

export default App;
