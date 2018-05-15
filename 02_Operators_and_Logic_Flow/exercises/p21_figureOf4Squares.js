/**
 * Created by Ivaylo on 4/28/2018.
 */

function squares(n) {
    let rows = n % 2 !== 0 ? n : n - 1;
    let result = "";
    let middleRow = Math.ceil(rows / 2);
    for(let i = 1; i <= rows; i ++){
        if(i === 1 || i === middleRow || i === rows){
            result += "+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+\n";
        }else{
            result += "|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|\n";
        }
    }
    return result;
}

console.log(squares(7))
