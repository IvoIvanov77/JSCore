/**
 * Created by Ivaylo on 4/29/2018.
 */

function diagonalSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;

    for(let row = 0; row < matrix.length; row ++){
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - 1 - row];
    }
    console.log(mainSum + ' ' + secondarySum);
}

