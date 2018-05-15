/**
 * Created by Ivaylo on 4/29/2018.
 */


function printEveryN_thElement_01(arr){
    let n = arr.pop();
    for (let index in arr) {
        if(index % n === 0){
            console.log(arr[index]);
        }
    }
}

function printEveryN_thElement_02(arr){
    let n = arr.pop();
    for (let i = 0; i < arr.length; i += n) {
       console.log(arr[i]);
    }
}

function printEveryN_thElement_03(arr){
    let n = arr.pop();
    arr.forEach((num, i) => {if(i % n === 0) console.log(num)})
}


// printEveryN_thElement_03(["dsa", "asd", "test", "tset", 2]);