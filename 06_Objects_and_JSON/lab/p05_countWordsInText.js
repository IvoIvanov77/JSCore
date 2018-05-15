/**
 * Created by Ivaylo on 5/3/2018.
 */

function countWordsInText(text) {

    if(Array.isArray(text)){
        text = text.join('');
    }
    let matches = text.match(/\w+/g);
    let words = {};
    for (let word of matches) {
        // if(words[word] === undefined){
        //     words[word] = 1;
        // }else{
        //     words[word] ++;
        // }
        words[word] ? words[word] ++ : words[word] = 1;
    }
    return JSON.stringify(words);
}