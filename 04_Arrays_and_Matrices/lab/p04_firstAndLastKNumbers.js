/**
 * Created by Ivaylo on 4/29/2018.
 */

function firstLastKElements(arr) {
    let k = arr.shift();
    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.slice(arr.length - k, arr.length);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}


