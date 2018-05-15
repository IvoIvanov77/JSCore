/**
 * Created by Ivaylo on 4/30/2018.
 */

function concatenateAndReverse(arr) {
    let str = arr.join('');
    let charArr = Array.from(str).reverse();
    return charArr.join('');
}
