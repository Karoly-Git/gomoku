import React, { useState } from 'react';
import './App.css';

function App() {
  /*
    1.  Make an n x m matrix, where n represents the num of columns, m represents the num of rows.
    2.  Draw a board based on the Matrix.
    3.  Get cell position when clicking on a cell.
    4.  When clicking on a cell, set the 'player' value to the active player.
    5.  Draw a disk in the clicked cell, 
        but draw disks in different colors for the players, prevent overwriting the existing disks, 
        set hover effect when cell is avaliable.
  */

  const [activePlayer, setActivePlayer] = useState('A');

  function makeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, player: '' }))
    return matrix;
  };

  const [matrix, setMatrix] = useState(makeMatrix());

  function handleClick(x, y) {
    updateMatrix(x, y);
  }

  function updateMatrix(x, y) {
    let newMatrix = [...matrix];
    if (newMatrix[y][x].player === '') {
      newMatrix[y][x].player = activePlayer;
      setActivePlayer(newMatrix[y][x].player === 'A' ? 'B' : 'A');
    }
    setMatrix(newMatrix);
  }

  return (
    <div className="App">
      <div className='board'>
        {
          matrix.map((row, rIndex) =>
            <div className='row' key={rIndex}>
              {
                row.map((cell, cIndex) =>
                  <div className='cell' key={cIndex} onClick={() => handleClick(cIndex, rIndex)} style={matrix[rIndex][cIndex].player ? { backgroundColor: 'unset' } : {}}>
                    {matrix[rIndex][cIndex].player === '' ? <></> : matrix[rIndex][cIndex].player === 'A' ? <div className='disk disk-A'></div> : <div className='disk disk-B'></div>}
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
