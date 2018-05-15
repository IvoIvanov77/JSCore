/**
 * Created by Ivaylo on 4/28/2018.
 */

function triangleOfStars(n) {

    function printStars(count) {
        console.log("*".repeat(count))
    }

    for(let i = 1; i <= n; i++){
        printStars(i);
    }
    for(let i = n - 1; i > 0; i --){
        printStars(i);
    }
    
}
