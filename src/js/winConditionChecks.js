export function checkHorizontal(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
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
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }

        if (!matrix[y][k + 1] || matrix[y][k].player !== matrix[y][k + 1].player) {
            break;
        }
    }
}

export function checkVertical(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
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
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }

        if (!matrix[k + 1] || matrix[k][x].player !== matrix[k + 1][x].player) {
            break;
        }
    }
}

export function checkDiagonalA(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
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
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }

        startX++;
        startY++;
    }
}

export function checkDiagonalB(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
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
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }

        startX--;
        startY++;
    }
}
