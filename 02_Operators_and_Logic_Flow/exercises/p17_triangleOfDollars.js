/**
 * Created by Ivaylo on 4/27/2018.
 */

function triangleOfDollars_01(n) {
    let line = '';
    for(let col = 1; col <= n; col++){
        line += '$';
        console.log(line);
    }
}

function triangleOfDollars_02(n) {

    for(let row = 1; row <= n; row++){
        console.log(new Array(row + 1).join('$'));
    }
}

function triangleOfDollars_03(n) {

    for(let row = 1; row <= n; row++){
        console.log('$'.repeat(row));
    }
}


