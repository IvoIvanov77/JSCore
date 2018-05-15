/**
 * Created by Ivaylo on 5/1/2018.
 */

function capitalizeWords(text) {
    let allWords = text.split(" ");
    let resultArray = [];
    for (let word of allWords) {
        let newWord = word.toLowerCase();
        resultArray.push(newWord.replace(newWord[0], newWord[0].toUpperCase()));
    }
    return resultArray.join(' ');
}



