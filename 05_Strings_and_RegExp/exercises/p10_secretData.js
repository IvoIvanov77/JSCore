/**
 * Created by Ivaylo on 5/1/2018.
 */

function solve(input) {
    let pattern = /((\*[A-Z][a-zA-Z]*)|(\+[0-9-]{10})|(![a-zA-Z0-9]+)|(_[a-zA-Z0-9]+))(?=\s|$)/g;
    return input.join('\n').replace(pattern, m => '|'.repeat(m.length));
}

function secretData(input) {
    let pattern = /((\*[A-Z][a-zA-Z]*)|(\+[0-9-]{10})|(![a-zA-Z0-9]+)|(_[a-zA-Z0-9]+))(?=\s|$)/g;
    for(let sentence of input) {
        sentence = sentence.replace(pattern, m => "|".repeat(m.length));
        console.log(sentence);
    }
}