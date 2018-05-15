/**
 * Created by Ivaylo on 4/27/2018.
 */

function multiplication(n) {
    let table = "<table border='1'>\n<tr><th>x</th>";
    for(let a = 1; a <= n; a++){
        table += `<th>${a}</th>`;
    }
    table += "</tr>\n";

    for (let i = 1; i <= n; i++){
        let row = `<tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++){
            row += `<td>${i * j}</td>`
        }
        table += row + '</tr>\n';
    }
    table += '</table>';
    return table;
}

console.log(multiplication(5))
