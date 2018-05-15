/**
 * Created by Ivaylo on 4/28/2018.
 */

function calculate(a, b, op) {

    let calc = function (a, b, op) {
        return op(a,b);
    };
    let add = function (a, b) {
        return a + b;
    };
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (op){
        case "+" : return calc(a, b, add);
        case "-" : return calc(a, b, subtract);
        case "*" : return calc(a, b, multiply);
        case "/" : return calc(a, b, divide);
    }
}


