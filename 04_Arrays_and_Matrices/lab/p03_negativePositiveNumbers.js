/**
 * Created by Ivaylo on 4/29/2018.
 */

function negativePositiveNumbers(arr) {
    let result = [];
    for (let n of arr) {
        if(n < 0){
            result.unshift(n);
        }else{
            result.push(n);
        }
    }
    return result.join('\n');
}

