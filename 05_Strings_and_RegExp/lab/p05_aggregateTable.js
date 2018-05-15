/**
 * Created by Ivaylo on 4/30/2018.
 */

function aggregateTable(lines) {
    let towns = [];
    let count = 0;

    for (let line of lines) {
        let arr = line.split('|');
        towns.push(arr[1].trim());
        count += Number(arr[2].trim());
    }

    return towns.join(', ') + "\n" + count;
}


