/**
 * Created by Ivaylo on 5/1/2018.
 */

function extractLinks(input) {
    let pattern = /www\.[A-Za-z0-9-]*(\.[a-z]+)+/g;
    let result = [];
    for (let sentence of input) {
        let matches = sentence.match(pattern);
        if(matches){
            matches.forEach(match => result.push(match));
        }
    }
    return result.join('\n');
}