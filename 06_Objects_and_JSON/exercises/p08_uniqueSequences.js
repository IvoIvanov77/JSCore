/**
 * Created by Ivaylo on 5/4/2018.
 */

function uniqueSequences(input) {
    let arrSet = new Set();
    for (let line of input) {
        let arr = JSON.parse(line);
        arr.sort((a, b) => Number(b) - Number(a));
        let str = JSON.stringify(arr);
        arrSet.add(str);
    }
    [...arrSet]
        .map(s => JSON.parse(s))
        .sort((a, b) => a.length - b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

