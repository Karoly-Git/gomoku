import React from 'react';
import './App.css';

function App() {
  /*
    - Make an n x m matrix, where n represents the num of columns, m represents the num of rows.
    - Draw a board based on the Matrix.
  */


  function makeMatrix(n = 10, m = 10) {
    let matrix = new Array(m).fill(new Array(n).fill(null));
    matrix = matrix.map((y, yIndex) => y.map((x, xIndex) => x = { x: xIndex, y: yIndex, used: false }))
    return matrix;
  };

  let matrix = makeMatrix();


  return (
    <div className="App">
      <div className='board'>
        {
          matrix.map((row, rIndex) =>
            <div className='row' key={rIndex}>
              {
                row.map((cell, cIndex) =>
                  <div className='cell' key={cIndex}></div>
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
