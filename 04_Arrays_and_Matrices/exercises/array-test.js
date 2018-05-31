/**
 * Created by Ivaylo on 5/29/2018.
 */

let arr =[1,2,3];
arr['ivo'] = 'ivo';
arr[-5] = false;
console.log(arr);
console.log(arr instanceof Array);
console.log(arr.reverse());
console.log(arr.length);
arr[10] = 12;
console.log(arr);
console.log(arr.toString());
console.log(arr.length);
console.log(arr[8] === undefined);
console.log(arr[20] === undefined);
console.log(arr[8] === console[20]);
console.log(arr[10]);

let counter = 0;
for (let obj of arr) {
    console.log(++counter)
}
console.log('for off counter----------' + counter);

counter = 0;
for (let index in arr) {
    console.log(++counter)
}
console.log('for in counter----------' + counter);

counter = 0;
arr.forEach((item, index) =>{
    console.log(index  + ': ' + item);
    counter ++;

});
console.log('for each counter----------' + counter);

let newArray = new Array(10);

console.log(newArray)