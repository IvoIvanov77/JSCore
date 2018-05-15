/**
 * Created by Ivaylo on 4/30/2018.
 */

function censor(text, words) {
    for (let word of words) {
        let replaced = '-'.repeat(word.length);
        while(text.indexOf(word) > - 1){
           text =  text.replace(word, replaced);
        }
    }
    return text;
}

console.log(censor('roses are red, violets are blue', [', violets are', 'red']))