/**
 * Created by Ivaylo on 4/28/2018.
 */

function squareOfStars(n = 5) {

    function printStars(count = n) {
        console.log("*" + " *".repeat(count -1))
    }

    for(let i = 1; i <= n; i ++){
        printStars();
    }
}


