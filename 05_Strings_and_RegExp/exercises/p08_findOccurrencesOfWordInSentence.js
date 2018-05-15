/**
 * Created by Ivaylo on 5/1/2018.
 */

function countOccurrences(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let matches = sentence.match(regex);
    return matches ? matches.length : 0;
}

