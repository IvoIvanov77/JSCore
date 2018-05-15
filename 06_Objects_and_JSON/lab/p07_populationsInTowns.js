/**
 * Created by Ivaylo on 5/3/2018.
 */

function townsPopulation(input) {
    let townsPopulations = new Map();

    for (let item of input) {
        let arr = item.split(/\s*<->\s*/);
        townsPopulations.has(arr[0]) ? townsPopulations.set(arr[0],
            townsPopulations.get(arr[0]) + Number(arr[1]))
            : townsPopulations.set(arr[0], Number(arr[1]));
    }

    for (let town of townsPopulations.keys()) {
        console.log(`${town} : ${townsPopulations.get(town)}`);
    }
}