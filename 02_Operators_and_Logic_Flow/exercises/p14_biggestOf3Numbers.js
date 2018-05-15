/**
 * Created by Ivaylo on 4/27/2018.
 */

function biggestNumber_01(input) {
    let num1 = input[0];
    let num2 = input[1];
    let num3 = input[2];
    console.log(Math.max(num1, num2, num3));
}

function biggestNumber_02([num1, num2, num3]) {
    console.log(Math.max(num1, num2, num3));
}

const f = ([num1, num2, num3]) => console.log(Math.max(num1, num2, num3));
f([1, 2, 3]);

const f1 = (nums) => Math.max(nums[0], nums[1], nums[2]);

let result = f1([1, 2, 3]);

console.log(result);
