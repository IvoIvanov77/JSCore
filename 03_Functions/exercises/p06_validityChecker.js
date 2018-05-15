/**
 * Created by Ivaylo on 4/28/2018.
 */

function checkTwoPoints(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    let result = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
    return distance === Math.round(distance) ? result + "valid" : result + "invalid";
}

function solve(input) {
    [x1, x2, y1, y2] = input;
    console.log(checkTwoPoints(x1, y1, 0, 0));
    console.log(checkTwoPoints(x2, y2, 0, 0));
    console.log(checkTwoPoints(x1, y1, x2, y2));
}

solve([2, 1, 1, 1]);
