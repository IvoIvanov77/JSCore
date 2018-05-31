/**
 * Created by Ivaylo on 5/30/2018.
 */

function solve(arr){
    let rows = Number(arr[0]);
    let cols = Number(arr[1]);
    let X = Number(arr[2]);
    let Y = Number(arr[3]);

    let matrix = zeroFill(rows, cols);
    let orbitNum = 0;
    while (orbitNum < Math.max(rows, cols)) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col]===0&&
                    row >= X - orbitNum && row <= X  + orbitNum
                    && col >= Y  - orbitNum && col <= Y  + orbitNum) {
                    matrix[row][col] = orbitNum + 1;
                }
            }
        }
        orbitNum++;
    }

    printMatrix();

    function zeroFill(rows, cols) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push('0'.repeat(cols).split('').map(Number));
        }
        return matrix;
    }

    function printMatrix() {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}

function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];

    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

orbit([5, 7, 1, 3]);