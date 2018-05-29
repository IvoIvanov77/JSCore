/**
 * Created by Ivaylo on 5/17/2018.
 */

//90/100 judge
function solve(a, b, c) {
    let discriminant = b * b - 4 *a * c;

    let result;
    if(discriminant === 0){
        result = - b / (2 * a);
        // result = - b / 2 * a;
    }else if(discriminant > 0){
        let x1 = (- b + Math.sqrt(discriminant))/ (2 * a);
        let x2 = (- b - Math.sqrt(discriminant))/ (2 * a);
        result = [x1, x2];
    }else {
        result = 'No';
    }
    console.log(Array.isArray(result) ? result.sort((a, b) => a - b).join('\n') : result);
}

//100/100 judge
function solveEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (discriminant === 0) {
         console.log((-b) / (2 * a));
    } else {
        console.log('No');
    }
}



solve(6,0,0);
