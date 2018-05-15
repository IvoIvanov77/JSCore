/**
 * Created by Ivaylo on 4/26/2018.
 */

let ch = 'x'; // string
console.log(typeof(ch));
ch ++; // ch is now number
console.log(typeof(ch));
console.log(ch); // NaN

let n = "1" * 1; // number
console.log(n);
let b = Boolean(n);
console.log(typeof(b));
console.log(b); // true

let num = 0xFF; // 255
console.log(typeof(num));
num = num + "x"; // string
console.log(typeof(num));
console.log(num); // 255x

let n1 = [1, 2]; // array
console.log(typeof(n1));
console.log(n1);
n1 ++; // n is now 2 (number)
console.log(n1);
console.log(typeof(n1));


