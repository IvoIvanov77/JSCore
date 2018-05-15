/**
 * Created by Ivaylo on 4/29/2018.
 */

function biggestElement(matrix){
    let biggestNumber = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row
        .forEach(n => biggestNumber = Math.max(biggestNumber, n)));
    return biggestNumber;
}


