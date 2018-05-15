/**
 * Created by Ivaylo on 5/1/2018.
 */

function findVariableNames(text) {
    let matches = text.match(/\b_[a-zA-Z0-9]+\b/g);
    let result = matches.map(match => match.substring(1));
    return result.join(',');
}
