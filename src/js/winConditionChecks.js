export function checkHorizontal(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
    let startX = x;

    while (startX >= 0 && matrix[y][startX].player === activePlayer) {
        startX--;
    }

    let count = 0;

    for (let k = startX + 1; k < matrix[0].length && matrix[y][k].player === activePlayer; k++) {
        count++;

        if (count >= winCount) {
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }
    }
}

export function checkVertical(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
    let startY = y;

    while (startY >= 0 && matrix[startY][x].player === activePlayer) {
        startY--;
    }

    let count = 0;

    for (let k = startY + 1; k < matrix.length && matrix[k][x].player === activePlayer; k++) {
        count++;

        if (count >= winCount) {
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }
    }
}

export function checkDiagonalA(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
    let startX = x;
    let startY = y;

    while (startX >= 0 && startY >= 0 && matrix[startY][startX].player === activePlayer) {
        startX--;
        startY--;
    }

    let count = 0;

    for (let k = startX + 1, m = startY + 1; k < matrix[0].length && m < matrix.length && matrix[m][k].player === activePlayer; k++, m++) {
        count++;

        if (count >= winCount) {
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }
    }
}

export function checkDiagonalB(x, y, matrix, activePlayer, winCount, scoreA, scoreB, setScoreA, setScoreB, setIsWinner) {
    let startX = x;
    let startY = y;

    while (startX < matrix[0].length && startY >= 0 && matrix[startY][startX].player === activePlayer) {
        startX++;
        startY--;
    }

    let count = 0;

    for (let k = startX - 1, m = startY + 1; k >= 0 && m < matrix.length && matrix[m][k].player === activePlayer; k--, m++) {
        count++;

        if (count >= winCount) {
            activePlayer === 'A' ? setScoreA(scoreA + 1) : setScoreB(scoreB + 1);
            setIsWinner(true);
            break;
        }
    }
}
