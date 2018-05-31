/**
 * Created by Ivaylo on 5/29/2018.
 */

function solve(arr) {
    let matrix = arr.map(str => str.split(' ').map(s => Number(s)));


    let leftDiagonal = (matrix) => {
        let sum = 0;
        let indexes = [];
        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
            indexes.push(JSON.stringify([i, i]));
        }
        return {sum, indexes};

    };

    let rightDiagonal = (matrix) => {
        let sum = 0;
        let indexes = [];
        for (let i = 0; i < matrix.length; i++) {
            let columnIndex = matrix[i].length - 1 - i;
            sum += matrix[i][columnIndex];
            indexes.push(JSON.stringify([i, columnIndex]));
        }
        return {sum, indexes};

    };
    let sum;
    if((sum = leftDiagonal(matrix).sum )=== rightDiagonal(matrix).sum){
        let diagonalIndexes = leftDiagonal(matrix).indexes.concat(rightDiagonal(matrix).indexes);
        // console.log(diagonalIndexes)
        for(let i = 0; i < matrix.length; i ++){
            for(let j = 0; j < matrix[i].length; j ++){
                if(!diagonalIndexes.includes(JSON.stringify([i, j]))){
                    matrix[i][j] = sum;
                }
            }
        }
    }

    // function matrixToString(matrix) {
    //     let result = '';
    //
    //     for (let arr of matrix) {
    //         result += arr.join(' ') + '\n'
    //     }
    //     return result;
    // }
    // console.log(matrixToString(matrix));

    console.log(
        matrix.map(row => row.join(' '))
            .join('\n'));

}

solve(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

