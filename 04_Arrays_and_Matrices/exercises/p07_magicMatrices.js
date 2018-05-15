/**
 * Created by Ivaylo on 4/30/2018.
 */

function magicMatrices(matrix) {

    function sumRow(matrix, index) {
        let sum = 0;
        for(let i = 0; i < matrix[index].length; i ++){
            sum += matrix[index][i];
        }
        return sum;
    }

    function sumColumn(matrix, index) {
        let sum = 0;
        for(let i = 0; i < matrix.length; i ++){
            sum += matrix[i][index];
        }
        return sum;
    }

    let sum = sumRow(matrix, 0);

    for(let i = 1; i < matrix.length; i ++){
        if(sumRow(matrix, i) !== sum){
            return false;
        }
    }

    for(let i = 0; i < matrix[0].length; i ++){
        if(sumColumn(matrix, i) !== sum){
            return false;
        }
    }
    return true
}

console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
