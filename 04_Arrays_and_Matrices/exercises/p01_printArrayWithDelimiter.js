/**
 * Created by Ivaylo on 4/29/2018.
 */

function printArrayWithDelimiter(arr){
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

// printArrayWithDelimiter(["One", "Two", "Three", "Four", "Five", "-"]);
