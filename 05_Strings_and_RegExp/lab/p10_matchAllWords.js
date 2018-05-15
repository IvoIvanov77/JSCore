/**
 * Created by Ivaylo on 4/30/2018.
 */

function matchAllWords_01(text) {
    if(Array.isArray(text)) {
        text = text[0];
    }

    let words = text.match(/\w+/g);
    return words.join('|');
}

function matchAllWords_02(text) {
    if(Array.isArray(text)) {
        text = text[0];
    }
    let words = text.split(/\W+/);
    return words.filter(s => s !== '').join('|');
}

