import React, { useState } from 'react';
import './App.css';

function App() {
  /*
    - Make an n x m matrix, where n represents the num of columns, m represents the num of rows.
    - Draw a board based on the Matrix.
    - Get cell position when clicking on a cell.
    - When clicking on a cell, set the 'used' value to 'false' for the corresponding element in the matrix.
  */


  function makeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, used: false }))
    return matrix;
  };

  const [matrix, setMatrix] = useState(makeMatrix());

  function handleClick(x, y) {
    console.log(x, y);
    setUsedTrue(x, y);
  }

  function setUsedTrue(x, y) {
    let newMatrix = [...matrix];
    newMatrix[y][x].used = true;
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
                  <div className='cell' key={cIndex} onClick={() => handleClick(cIndex, rIndex)}></div>
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
