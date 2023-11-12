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
                    ? 'O' : ' ']
        ))
    );
}

//let matrix = initializeMatrix();

/*
matrix =
    [
        [[0, 0, 'O'], [1, 0, ' '], [2, 0, ' '], [3, 0, ' '], [4, 0, 'O'], [5, 0, ' '], [6, 0, 'O'], [7, 0, 'O'], [8, 0, 'O'], [9, 0, 'O']],
        [[0, 1, ' '], [1, 1, 'O'], [2, 1, 'O'], [3, 1, 'O'], [4, 1, 'O'], [5, 1, 'O'], [6, 1, ' '], [7, 1, ' '], [8, 1, ' '], [9, 1, ' ']],
        [[0, 2, ' '], [1, 2, ' '], [2, 2, 'O'], [3, 2, 'O'], [4, 2, 'O'], [5, 2, ' '], [6, 2, ' '], [7, 2, ' '], [8, 2, ' '], [9, 2, ' ']],
        [[0, 3, ' '], [1, 3, ' '], [2, 3, ' '], [3, 3, 'O'], [4, 3, ' '], [5, 3, 'O'], [6, 3, ' '], [7, 3, ' '], [8, 3, ' '], [9, 3, ' ']],
        [[0, 4, ' '], [1, 4, ' '], [2, 4, ' '], [3, 4, 'O'], [4, 4, 'O'], [5, 4, 'O'], [6, 4, ' '], [7, 4, ' '], [8, 4, ' '], [9, 4, ' ']],
        [[0, 5, 'O'], [1, 5, ' '], [2, 5, ' '], [3, 5, 'O'], [4, 5, 'O'], [5, 5, 'O'], [6, 5, ' '], [7, 5, ' '], [8, 5, ' '], [9, 5, ' ']],
        [[0, 6, ' '], [1, 6, 'O'], [2, 6, ' '], [3, 6, ' '], [4, 6, 'O'], [5, 6, 'O'], [6, 6, 'O'], [7, 6, ' '], [8, 6, ' '], [9, 6, ' ']],
        [[0, 7, ' '], [1, 7, ' '], [2, 7, 'O'], [3, 7, ' '], [4, 7, 'O'], [5, 7, 'O'], [6, 7, ' '], [7, 7, 'O'], [8, 7, ' '], [9, 7, ' ']],
        [[0, 8, ' '], [1, 8, ' '], [2, 8, ' '], [3, 8, 'O'], [4, 8, ' '], [5, 8, ' '], [6, 8, ' '], [7, 8, ' '], [8, 8, ' '], [9, 8, ' ']],
        [[0, 9, ' '], [1, 9, ' '], [2, 9, ' '], [3, 9, ' '], [4, 9, 'O'], [5, 9, ' '], [6, 9, ' '], [7, 9, ' '], [8, 9, ' '], [9, 9, ' ']]
    ];
//*/
/*
matrix =
    [
        [[0, 0, ' '], [1, 0, ' '], [2, 0, ' '], [3, 0, ' '], [4, 0, ' '], [5, 0, 'O'], [6, 0, ' '], [7, 0, ' '], [8, 0, ' '], [9, 0, ' ']],
        [[0, 1, ' '], [1, 1, ' '], [2, 1, ' '], [3, 1, ' '], [4, 1, 'O'], [5, 1, ' '], [6, 1, 'O'], [7, 1, ' '], [8, 1, 'O'], [9, 1, ' ']],
        [[0, 2, ' '], [1, 2, 'O'], [2, 2, ' '], [3, 2, ' '], [4, 2, ' '], [5, 2, 'O'], [6, 2, ' '], [7, 2, 'O'], [8, 2, ' '], [9, 2, ' ']],
        [[0, 3, 'O'], [1, 3, ' '], [2, 3, 'O'], [3, 3, ' '], [4, 3, ' '], [5, 3, ' '], [6, 3, 'O'], [7, 3, ' '], [8, 3, ' '], [9, 3, ' ']],
        [[0, 4, 'O'], [1, 4, ' '], [2, 4, ' '], [3, 4, 'O'], [4, 4, 'O'], [5, 4, 'O'], [6, 4, 'O'], [7, 4, ' '], [8, 4, ' '], [9, 4, ' ']],
        [[0, 5, 'O'], [1, 5, ' '], [2, 5, ' '], [3, 5, ' '], [4, 5, 'O'], [5, 5, ' '], [6, 5, ' '], [7, 5, ' '], [8, 5, ' '], [9, 5, ' ']],
        [[0, 6, 'O'], [1, 6, ' '], [2, 6, ' '], [3, 6, ' '], [4, 6, ' '], [5, 6, 'O'], [6, 6, ' '], [7, 6, ' '], [8, 6, ' '], [9, 6, ' ']],
        [[0, 7, 'O'], [1, 7, 'O'], [2, 7, 'O'], [3, 7, 'O'], [4, 7, 'O'], [5, 7, ' '], [6, 7, ' '], [7, 7, ' '], [8, 7, ' '], [9, 7, ' ']],
        [[0, 8, ' '], [1, 8, ' '], [2, 8, ' '], [3, 8, ' '], [4, 8, ' '], [5, 8, ' '], [6, 8, ' '], [7, 8, ' '], [8, 8, ' '], [9, 8, ' ']],
        [[0, 9, ' '], [1, 9, ' '], [2, 9, ' '], [3, 9, ' '], [4, 9, ' '], [5, 9, ' '], [6, 9, ' '], [7, 9, ' '], [8, 9, ' '], [9, 9, ' ']]
    ];
//*/
matrix =
    [
        [[0, 0, ' '], [1, 0, ' '], [2, 0, ' '], [3, 0, ' '], [4, 0, ' '], [5, 0, ' '], [6, 0, ' '], [7, 0, ' '], [8, 0, ' '], [9, 0, ' ']],
        [[0, 1, 'O'], [1, 1, ' '], [2, 1, ' '], [3, 1, ' '], [4, 1, ' '], [5, 1, ' '], [6, 1, ' '], [7, 1, ' '], [8, 1, ' '], [9, 1, ' ']],
        [[0, 2, 'O'], [1, 2, ' '], [2, 2, ' '], [3, 2, ' '], [4, 2, ' '], [5, 2, ' '], [6, 2, ' '], [7, 2, ' '], [8, 2, ' '], [9, 2, ' ']],
        [[0, 3, 'O'], [1, 3, ' '], [2, 3, ' '], [3, 3, ' '], [4, 3, ' '], [5, 3, ' '], [6, 3, ' '], [7, 3, ' '], [8, 3, ' '], [9, 3, ' ']],
        [[0, 4, ' '], [1, 4, ' '], [2, 4, ' '], [3, 4, ' '], [4, 4, ' '], [5, 4, ' '], [6, 4, ' '], [7, 4, ' '], [8, 4, ' '], [9, 4, ' ']],
        [[0, 5, ' '], [1, 5, ' '], [2, 5, ' '], [3, 5, ' '], [4, 5, ' '], [5, 5, ' '], [6, 5, ' '], [7, 5, ' '], [8, 5, ' '], [9, 5, ' ']],
        [[0, 6, ' '], [1, 6, ' '], [2, 6, ' '], [3, 6, ' '], [4, 6, ' '], [5, 6, ' '], [6, 6, ' '], [7, 6, ' '], [8, 6, ' '], [9, 6, ' ']],
        [[0, 7, ' '], [1, 7, ' '], [2, 7, ' '], [3, 7, ' '], [4, 7, ' '], [5, 7, ' '], [6, 7, ' '], [7, 7, ' '], [8, 7, ' '], [9, 7, ' ']],
        [[0, 8, 'O'], [1, 8, ' '], [2, 8, ' '], [3, 8, ' '], [4, 8, ' '], [5, 8, ' '], [6, 8, ' '], [7, 8, ' '], [8, 8, ' '], [9, 8, ' ']],
        [[0, 9, 'O'], [1, 9, ' '], [2, 9, ' '], [3, 9, ' '], [4, 9, ' '], [5, 9, ' '], [6, 9, ' '], [7, 9, ' '], [8, 9, ' '], [9, 9, ' ']]
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
            if (cell[2] === 'O') {
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
            if (cell[2] === 'O') {
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
            if (cell[2] === 'O') {
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
            if (cell[2] === 'O') {
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
            if (cell[2] === 'O') {
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
            if (cell[2] === 'O') {
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
    [0, 1, 'O'],
    [0, 3, 'O'],
    'V'
];

function checkVerticalOpen(sequence) {
    let direction = sequence[sequence.length - 1];

    let cellX = sequence[0][0];

    let cellTopY = sequence[0][1];

    let isTopOpen =
        direction === 'V' &&
        cellTopY !== 0 &&
        matrix[cellTopY - 1][0][2] === ' ';
    ;

    let cellBottomY = sequence[sequence.length - 2][1];

    let isBottomOpen =
        direction === 'V' &&
        cellBottomY !== matrix.length - 1 &&
        matrix[cellBottomY + 1][0][2] === ' ';
    ;

    let possibleCountDown = 0;
    for (let y = cellTopY; y <= 9; y++) {
        let value = matrix[y][cellX][2];
        if (value === 'O' || value === ' ') {
            possibleCountDown++
        } else {
            break;
        }
    }

    let possibleCountUp = 0;
    for (let y = cellBottomY; y >= 0; y--) {
        let value = matrix[y][cellX][2];
        if (value === 'O' || value === ' ') {
            possibleCountUp++
        } else {
            break;
        }
    }

    let gapTop = 0;
    for (let y = cellTopY - 1; y >= 0; y--) {
        let value = matrix[y][cellX][2];
        if (value === ' ') {
            gapTop++
        } else {
            break;
        }
    }

    let gapBottom = 0;
    for (let y = cellBottomY + 1; y <= 9; y++) {
        let value = matrix[y][cellX][2];
        if (value === ' ') {
            gapBottom++
        } else {
            break;
        }
    }

    console.log('Possible Count Up:', possibleCountUp);
    console.log('Possible Count Down:', possibleCountDown);
    console.log('Gap Top:', gapTop);
    console.log('Gap Bottom:', gapBottom);

    console.log(isTopOpen ? 'Top Open' : 'Top Not Open');
    console.log(isBottomOpen ? 'Bottom Open' : 'Bottom Not Open');
}

checkVerticalOpen(seq);


/////list = [[
/////    [0, 7, 'O'],
/////    [1, 7, 'O'],
/////    [2, 7, 'O'],
/////    [3, 7, 'O'],
/////    [4, 7, 'O'],
/////    [5, 7, 'O'],
/////    [6, 7, 'O'],
/////    [9, 7, 'O']
/////]];

//let edgesX = [0, matrix.length - 1];

/////if (list.length === 0) {
/////    // First Step
/////    console.log(list);
/////    console.log('First Step, length: 0');
/////} else if (list.length === 1) {
/////    /*
/////    - Check which end is open
/////    - Then put to the end
/////    */
/////
/////    let cellLeft = list[0][0];
/////    let cellRight = list[0][list[0].length - 1];
/////
/////    //console.log(cellLeft, cellRight);
/////
/////    let leftIsOpen = !(
/////        cellLeft[0] === 0 || cellLeft[0] === matrix.length - 1 ||
/////        cellLeft[1] === 0 || cellLeft[1] === matrix.length - 1
/////    );
/////
/////    let rightIsOpen = !(
/////        cellRight[0] === 0 || cellRight[0] === matrix.length - 1 ||
/////        cellRight[1] === 0 || cellRight[1] === matrix.length - 1
/////    );
/////
/////    console.log(leftIsOpen, rightIsOpen);
/////    //console.log(list);
/////    //console.log('Put to the end, length: 1');
/////} else {
/////    // Choose one and put to the end
/////    console.log(list);
/////    console.log('Choose one and put to the end, length > 1');
/////}





