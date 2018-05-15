/**
 * Created by Ivaylo on 4/28/2018.
 */

function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let words = extractWords(strUpper);
    words = words.filter(w => w !== '');
    return words.join(', ');
    function extractWords(string) { return string.split(/\W+/); }
}
