/**
 * Created by Ivaylo on 5/29/2018.
 */

function solve(x, y) {
    let area = x * y;
    let counter = 0;
    let direction = 'r';
    let matrix = createArray(x, y);
    let row = 0;
    let col = 0;

    while(counter < area){

        switch(direction){
            case 'r' : {
                matrix[row][col ++] = ++ counter;
                if(col === y  || matrix[row][col] !== 0) {
                    direction = 'd';
                    row ++;
                    col --;
                }

            }
                break;
            case 'd' : {
                matrix[row ++][col] = ++ counter;
                if(row === x || matrix[row][col] !== 0){
                    direction = 'l';
                    col --;
                    row --;
                }
            }
                break;
            case 'l' : {
                matrix[row][col --] = ++ counter;
                if(col < 0 || matrix[row][col] !== 0){
                    direction = 'up';
                    row --;
                    col ++
                }
            }
                break;

            case 'up' : {
                matrix[row --][col] = ++ counter;
                // console.log(matrix[row][col]);
                // console.log(row + '  ' + col)
                if(row < 0 || matrix[row][col] !== 0){
                    direction = 'r';
                    col ++
                    row ++;
                }
            }
                break;
        }
        // console.log(matrix);
        // console.log('---------------------')
    }

    function createArray(x, y) {
        let arr = [];
        for (let i = 0; i < x; i++) {
            let row = [];
            for (let j = 0; j < y; j++) {
                row.push(0);
            }
            arr.push(row);
        }
        return arr;
    }

    let result = '';

    for (let arr of matrix) {
        result += arr.join(' ') + '\n'
    }

    console.log(result)

}

solve(5,5)

// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

