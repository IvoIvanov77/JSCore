/**
 * Created by Ivaylo on 4/29/2018.
 */

function equalNeighborsCount(matrix) {
    let count = 0;
    for(let row = 0; row < matrix.length - 1; row ++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] === matrix[row + 1][col]){
                count ++;
            }
        }
    }
    for(let row = 0; row < matrix.length; row ++){
        for(let col = 0; col < matrix[row].length -  1; col++){
            if(matrix[row][col] === matrix[row][col + 1]){
                count ++;
            }
        }
    }
    return count;
}



