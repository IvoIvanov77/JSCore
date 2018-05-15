/**
 * Created by Ivaylo on 5/3/2018.
 */

function countWordsWithMaps(input) {
    let words = input.join('/n').toLowerCase();
    let matches = words.match(/\w+/g);
    let wordsCount = new Map();
    for (let word of matches) {
        wordsCount.has(word) ? wordsCount.set(word, wordsCount.get(word) + 1)
            : wordsCount.set(word, 1);
    }
    let keyArray = Array.from(wordsCount.keys()).sort();

    for (let key of keyArray) {
        console.log(`'${key}' -> ${wordsCount.get(key)} times`)
    }
}

// countWordsWithMaps(["Far too slow, you're far too slow."])