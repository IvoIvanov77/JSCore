/**
 * Created by Ivaylo on 4/29/2018.
 */

function evenPositions(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        if(i % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result.join(' ');
}

