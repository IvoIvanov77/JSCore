/**
 * Created by Ivaylo on 4/30/2018.
 */

function rotateArray(arr) {
    let n = arr.pop() % arr.length;

    for(let i = 0; i < n; i++){
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}



rotateArray([1, 2, 3, 4, 2]);
