let nX = 10;
let mY = 10;

function initializeMatrix(n = nX, m = mY) {
    return Array.from({ length: m }, (_, yIndex) =>
        Array.from({ length: n }, (_, xIndex) => (
            [xIndex, yIndex,
                yIndex === 0 && [6, 7, 8, 9].includes(xIndex) ||
                    yIndex === 1 && [0, 1, 2, 3, 4, 5].includes(xIndex) ||
                    [2, 3, 4, 5, 6, 7, 8].includes(yIndex) && xIndex === 3 ||
                    [0, 1, 2, 3, 4, 5, 6, 7].includes(yIndex) && xIndex === 4 ||
                    [3, 4, 5, 6, 7].includes(yIndex) && xIndex === 5
                    ? 'o' : ' ']
        ))
    );
}

//let matrix = initializeMatrix();

/*
matrix =
    [
        [[0, 0, 'o'], [1, 0, ' '], [2, 0, ' '], [3, 0, ' '], [4, 0, 'o'], [5, 0, ' '], [6, 0, 'o'], [7, 0, 'o'], [8, 0, 'o'], [9, 0, 'o']],
        [[0, 1, ' '], [1, 1, 'o'], [2, 1, 'o'], [3, 1, 'o'], [4, 1, 'o'], [5, 1, 'o'], [6, 1, ' '], [7, 1, ' '], [8, 1, ' '], [9, 1, ' ']],
        [[0, 2, ' '], [1, 2, ' '], [2, 2, 'o'], [3, 2, 'o'], [4, 2, 'o'], [5, 2, ' '], [6, 2, ' '], [7, 2, ' '], [8, 2, ' '], [9, 2, ' ']],
        [[0, 3, ' '], [1, 3, ' '], [2, 3, ' '], [3, 3, 'o'], [4, 3, ' '], [5, 3, 'o'], [6, 3, ' '], [7, 3, ' '], [8, 3, ' '], [9, 3, ' ']],
        [[0, 4, ' '], [1, 4, ' '], [2, 4, ' '], [3, 4, 'o'], [4, 4, 'o'], [5, 4, 'o'], [6, 4, ' '], [7, 4, ' '], [8, 4, ' '], [9, 4, ' ']],
        [[0, 5, 'o'], [1, 5, ' '], [2, 5, ' '], [3, 5, 'o'], [4, 5, 'o'], [5, 5, 'o'], [6, 5, ' '], [7, 5, ' '], [8, 5, ' '], [9, 5, ' ']],
        [[0, 6, ' '], [1, 6, 'o'], [2, 6, ' '], [3, 6, ' '], [4, 6, 'o'], [5, 6, 'o'], [6, 6, 'o'], [7, 6, ' '], [8, 6, ' '], [9, 6, ' ']],
        [[0, 7, ' '], [1, 7, ' '], [2, 7, 'o'], [3, 7, ' '], [4, 7, 'o'], [5, 7, 'o'], [6, 7, ' '], [7, 7, 'o'], [8, 7, ' '], [9, 7, ' ']],
        [[0, 8, ' '], [1, 8, ' '], [2, 8, ' '], [3, 8, 'o'], [4, 8, ' '], [5, 8, ' '], [6, 8, ' '], [7, 8, ' '], [8, 8, ' '], [9, 8, ' ']],
        [[0, 9, ' '], [1, 9, ' '], [2, 9, ' '], [3, 9, ' '], [4, 9, 'o'], [5, 9, ' '], [6, 9, ' '], [7, 9, ' '], [8, 9, ' '], [9, 9, ' ']]
    ];
//*/
/*
matrix =
    [
        [[0, 0, ' '], [1, 0, ' '], [2, 0, ' '], [3, 0, ' '], [4, 0, ' '], [5, 0, 'o'], [6, 0, ' '], [7, 0, ' '], [8, 0, ' '], [9, 0, ' ']],
        [[0, 1, ' '], [1, 1, ' '], [2, 1, ' '], [3, 1, ' '], [4, 1, 'o'], [5, 1, ' '], [6, 1, 'o'], [7, 1, ' '], [8, 1, 'o'], [9, 1, ' ']],
        [[0, 2, ' '], [1, 2, 'o'], [2, 2, ' '], [3, 2, ' '], [4, 2, ' '], [5, 2, 'o'], [6, 2, ' '], [7, 2, 'o'], [8, 2, ' '], [9, 2, ' ']],
        [[0, 3, 'o'], [1, 3, ' '], [2, 3, 'o'], [3, 3, ' '], [4, 3, ' '], [5, 3, ' '], [6, 3, 'o'], [7, 3, ' '], [8, 3, ' '], [9, 3, ' ']],
        [[0, 4, 'o'], [1, 4, ' '], [2, 4, ' '], [3, 4, 'o'], [4, 4, 'o'], [5, 4, 'o'], [6, 4, 'o'], [7, 4, ' '], [8, 4, ' '], [9, 4, ' ']],
        [[0, 5, 'o'], [1, 5, ' '], [2, 5, ' '], [3, 5, ' '], [4, 5, 'o'], [5, 5, ' '], [6, 5, ' '], [7, 5, ' '], [8, 5, ' '], [9, 5, ' ']],
        [[0, 6, 'o'], [1, 6, ' '], [2, 6, ' '], [3, 6, ' '], [4, 6, ' '], [5, 6, 'o'], [6, 6, ' '], [7, 6, ' '], [8, 6, ' '], [9, 6, ' ']],
        [[0, 7, 'o'], [1, 7, 'o'], [2, 7, 'o'], [3, 7, 'o'], [4, 7, 'o'], [5, 7, ' '], [6, 7, ' '], [7, 7, ' '], [8, 7, ' '], [9, 7, ' ']],
        [[0, 8, ' '], [1, 8, ' '], [2, 8, ' '], [3, 8, ' '], [4, 8, ' '], [5, 8, ' '], [6, 8, ' '], [7, 8, ' '], [8, 8, ' '], [9, 8, ' ']],
        [[0, 9, ' '], [1, 9, ' '], [2, 9, ' '], [3, 9, ' '], [4, 9, ' '], [5, 9, ' '], [6, 9, ' '], [7, 9, ' '], [8, 9, ' '], [9, 9, ' ']]
    ];
//*/
matrix =
    [
        [[0, 0, ' '], [1, 0, ' '], [2, 0, ' '], [3, 0, ' '], [4, 0, ' '], [5, 0, ' '], [6, 0, ' '], [7, 0, ' '], [8, 0, ' '], [9, 0, ' ']],
        [[0, 1, ' '], [1, 1, ' '], [2, 1, ' '], [3, 1, ' '], [4, 1, ' '], [5, 1, ' '], [6, 1, ' '], [7, 1, ' '], [8, 1, ' '], [9, 1, ' ']],
        [[0, 2, 'o'], [1, 2, ' '], [2, 2, ' '], [3, 2, ' '], [4, 2, ' '], [5, 2, ' '], [6, 2, ' '], [7, 2, ' '], [8, 2, ' '], [9, 2, ' ']],
        [[0, 3, 'o'], [1, 3, ' '], [2, 3, ' '], [3, 3, ' '], [4, 3, ' '], [5, 3, ' '], [6, 3, ' '], [7, 3, ' '], [8, 3, ' '], [9, 3, ' ']],
        [[0, 4, 'o'], [1, 4, ' '], [2, 4, ' '], [3, 4, ' '], [4, 4, ' '], [5, 4, ' '], [6, 4, ' '], [7, 4, ' '], [8, 4, ' '], [9, 4, ' ']],
        [[0, 5, 'o'], [1, 5, ' '], [2, 5, ' '], [3, 5, ' '], [4, 5, ' '], [5, 5, ' '], [6, 5, ' '], [7, 5, ' '], [8, 5, ' '], [9, 5, ' ']],
        [[0, 6, ' '], [1, 6, ' '], [2, 6, ' '], [3, 6, ' '], [4, 6, ' '], [5, 6, ' '], [6, 6, ' '], [7, 6, ' '], [8, 6, ' '], [9, 6, ' ']],
        [[0, 7, ' '], [1, 7, ' '], [2, 7, ' '], [3, 7, ' '], [4, 7, ' '], [5, 7, ' '], [6, 7, ' '], [7, 7, ' '], [8, 7, ' '], [9, 7, ' ']],
        [[0, 8, 'o'], [1, 8, ' '], [2, 8, ' '], [3, 8, ' '], [4, 8, ' '], [5, 8, ' '], [6, 8, ' '], [7, 8, ' '], [8, 8, ' '], [9, 8, ' ']],
        [[0, 9, ' '], [1, 9, ' '], [2, 9, ' '], [3, 9, ' '], [4, 9, ' '], [5, 9, ' '], [6, 9, ' '], [7, 9, ' '], [8, 9, ' '], [9, 9, ' ']]
    ];

//*/

function firsStep() {
    let x = Math.round(matrix[0].length / 2);
    let y = Math.round(matrix.length / 2);

    matrix[y][x][0] = x;
    matrix[y][x][1] = y;
};

function findTheLongests() {
    let listofLongests = [];

    let longestSequence = [];
    let currentSequence = [];

    // 1. Horizontal check ... //
    for (let row of matrix) {
        currentSequence = [];
        for (let cell of row) {
            if (cell[2] === 'o') {
                currentSequence.push(cell);
                if (longestSequence.length <= currentSequence.length) {
                    longestSequence = [...currentSequence];
                    listofLongests.push([...longestSequence, 'H']);
                }
            } else {
                currentSequence = [];
            }
        }
    }
    // ... Horizontal check //

    // 2. Vertical check ... //
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
        currentSequence = [];
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            let cell = matrix[rowIndex][colIndex];
            if (cell[2] === 'o') {
                currentSequence.push(cell);
                if (longestSequence.length <= currentSequence.length) {
                    longestSequence = [...currentSequence];
                    listofLongests.push([...longestSequence, 'V']);
                }
            } else {
                currentSequence = [];
            }
        }
    }

    // Diagonal-A check ... //
    for (let i = 9; i >= 0; i--) {
        currentSequence = [];
        let startX = i;
        let startY = 0;
        while (startX <= 9) {
            let cell = matrix[startY][startX];
            if (cell[2] === 'o') {
                currentSequence.push(cell);
                if (longestSequence.length <= currentSequence.length) {
                    longestSequence = [...currentSequence];
                    listofLongests.push([...longestSequence.sort((a, b) => a[0] - b[0]), 'A']);
                }
            } else {
                currentSequence = [];
            }
            startX++;
            startY++;
        }
    }

    for (let i = 1; i <= 9; i++) {
        currentSequence = [];
        let startX = 0;
        let startY = i;
        while (startY <= 9) {
            let cell = matrix[startY][startX];
            if (cell[2] === 'o') {
                currentSequence.push(cell);
                if (longestSequence.length <= currentSequence.length) {
                    longestSequence = [...currentSequence];
                    listofLongests.push([...longestSequence.sort((a, b) => a[0] - b[0]), 'A']);
                }
            } else {
                currentSequence = [];
            }
            startX++;
            startY++;
        }
    }
    // ... Diagonal-A check //

    // Diagonal-B check ... //
    for (let i = 0; i <= 9; i++) {
        currentSequence = [];
        let startX = i;
        let startY = 0;
        while (startX >= 0) {
            let cell = matrix[startY][startX];
            if (cell[2] === 'o') {
                currentSequence.push(cell);
                if (longestSequence.length <= currentSequence.length) {
                    longestSequence = [...currentSequence];
                    listofLongests.push([...longestSequence.sort((a, b) => a[0] - b[0]), 'B']);
                }
            } else {
                currentSequence = [];
            }
            startX--;
            startY++;
        }
    }

    for (let i = 1; i <= 9; i++) {
        currentSequence = [];
        let startX = 9;
        let startY = i;
        while (startY <= 9) {
            let cell = matrix[startY][startX];
            if (cell[2] === 'o') {
                currentSequence.push(cell);
                if (longestSequence.length <= currentSequence.length) {
                    longestSequence = [...currentSequence];
                    listofLongests.push([...longestSequence.sort((a, b) => a[0] - b[0]), 'B']);
                }
            } else {
                currentSequence = [];
            }
            startX--;
            startY++;
        }
    }
    // ... Diagonal-B check //

    listofLongests.sort((a, b) => b.length - a.length);

    let lengthOfLongest = listofLongests[0].length;

    //return listofLongests;
    return listofLongests.filter(sequence => sequence.length === lengthOfLongest);
};

let list = findTheLongests();

//list.forEach(e => console.log(e));

let seq = [
    [0, 1, 'o'],
    [0, 4, 'o'],
    'V'
];

// Pre-condition: 'sequence' had been chosen (must be 'V') by a method that is passed to verticalGo().
function verticalGo(sequence) {
    if (sequence[sequence.length - 1] !== 'V') return 'not vertical';

    let seqX = sequence[0][0];
    let maxY = sequence[0][1];

    for (let y = maxY - 1; y >= 0; y--) {
        let value = matrix[y][seqX][2];
        if (value !== 'x') {
            maxY = y;
        } else {
            break;
        }
    }

    let minY = maxY;

    for (let y = minY; y <= matrix.length - 1; y++) {
        let value = matrix[y][seqX][2];
        if (value !== 'x') {
            minY = y;
        } else {
            break;
        }
    }

    let gapTop = 0;
    let gapBottom = 0;

    for (let y = seq[0][1] - 1; y >= 0; y--) {
        let value = matrix[y][seqX][2];
        if (value === ' ') {
            gapTop++
        } else {
            break;
        }
    }

    for (let y = seq[1][1] + 1; y <= matrix.length - 1; y++) {
        let value = matrix[y][seqX][2];
        if (value === ' ') {
            gapBottom++
        } else {
            break;
        }
    }

    let possibleMaxLength = minY - maxY + 1;

    console.log('maxY:', maxY);
    console.log('minY:', minY);
    console.log('Possible max length:', possibleMaxLength);
    console.log('GapTop:', gapTop);
    console.log('GapBottom:', gapBottom);

    let goTo;

    if (possibleMaxLength < 5) {
        goTo = 'Choose other sequence or cell!';
    } else if (gapTop === 0 && gapBottom !== 0) {
        goTo = 'Go Down!' + `${seqX}, ${seq[1][1] + 1}`;
    } else if (gapBottom === 0 && gapTop !== 0) {
        goTo = 'Go Up!' + ` ${seqX}, ${seq[0][1] - 1}`;
    } else if (gapTop < gapBottom) {
        goTo = 'Go Up!' + ` ${seqX}, ${seq[0][1] - 1}`;
    } else if (gapBottom < gapTop) {
        goTo = 'Go Down!' + ` ${seqX}, ${seq[1][1] + 1}`;
    } else if (gapTop === gapBottom && gapBottom !== 0) {
        goTo = 'Go UP' + ` ${seqX}, ${seq[0][1] - 1}`;
    } else {
        goTo = 'No gap!';
    }

    return goTo;
}

console.log(verticalGo(seq));


