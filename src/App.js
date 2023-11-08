import React, { useState } from 'react';
import './App.css';

function App() {
  /*
    - Make an n x m matrix, where n represents the num of columns, m represents the num of rows.
    - Draw a board based on the Matrix.
    - Get cell position when clicking on a cell.
    - When clicking on a cell, set the 'used' value to 'false' for the corresponding element in the matrix.
    - Draw a disk in the clicked cell.
    - Draw disks in different colors with every other click. 
  */

  const [playerA, setPlayerA] = useState(true);

  function makeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, used: false, player: '' }))
    return matrix;
  };

  const [matrix, setMatrix] = useState(makeMatrix());

  function handleClick(x, y) {
    console.log(x, y);
    setStatus(x, y);
    setPlayerA(!playerA);
  }

  function setStatus(x, y) {
    let newMatrix = [...matrix];
    newMatrix[y][x].used = true;
    newMatrix[y][x].player = playerA ? 'A' : 'B';
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
                  <div className='cell' key={cIndex} onClick={() => handleClick(cIndex, rIndex)}>
                    {matrix[rIndex][cIndex].used ? matrix[rIndex][cIndex].player === 'A' ? <div className='disk disk-A'></div> : <div className='disk disk-B'></div> : <></>}
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
