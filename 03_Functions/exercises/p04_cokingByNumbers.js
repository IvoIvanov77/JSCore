/**
 * Created by Ivaylo on 4/28/2018.
 */

// •	chop – divide the number by two
// •	dice – square root of number
// •	spice – add 1 to number
// •	bake – multiply number by 3
// •	fillet – subtract 20% from number


// function operate(number, op) {
//     switch (op){
//         case "chop" : return chop(number);
//         case "dice" : return dice(number);
//         case "spice" : return spice(number);
//         case "bake" : return bake(number);
//         case "fillet" : return fillet(number);
//     }
//
// }

function solve(input){
    let functions = {
        "chop" : (n) => n / 2,
        "dice" : (n) => Math.sqrt(n),
        "spice" : (n) => n + 1,
        "bake" : (n) => n * 3,
        "fillet" : (n) => n * 0.8
    };

    let number = input[0];
    for(let i = 1; i < input.length; i ++){
        let f = functions[input[i]];
        number = f(number);
        console.log(number);
    }
}
solve([32, "chop", "chop", "chop", "chop", "chop", "bake"]);
// solve([9, dice, spice, chop, bake, fillet])