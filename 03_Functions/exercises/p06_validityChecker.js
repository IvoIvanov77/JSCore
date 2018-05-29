/**
 * Created by Ivaylo on 4/28/2018.
 */

function solve(input) {
    [x1, y1, x2, y2] = input;
    console.log(checkTwoPoints(x1, y1, 0, 0));
    console.log(checkTwoPoints(x2, y2, 0, 0));
    console.log(checkTwoPoints(x1, y1, x2, y2));

    function checkTwoPoints(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        let result = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
        return distance === Math.round(distance) ? result + "valid" : result + "invalid";
    }
}

solve([2, 1, 1, 1]);

//another solution
function checkValidity(points) {
    let [x1, y1, x2, y2] = points;
    isValidDistanceBetweenPoints(x1, y1);
    isValidDistanceBetweenPoints(x2, y2);
    isValidDistanceBetweenPoints(x1, y1, x2, y2);


    function isValidDistanceBetweenPoints(x1, y1, x2 = 0, y2 = 0) {
        let distance = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
        if(distance === Number.parseInt(distance.toString())){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

