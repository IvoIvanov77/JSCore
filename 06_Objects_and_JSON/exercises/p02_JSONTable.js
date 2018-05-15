/**
 * Created by Ivaylo on 5/4/2018.
 */

function JSONTable(input) {

    let html = `<table>\n`;

    for (let line of input) {
        let employee = JSON.parse(line);
        html +=
            `    <tr>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.salary}</td>
    <tr>\n`
    }
    html += `</table>`;
    console.log(html);
}

// JSONTable([
//     '{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}'
//
// ]);

