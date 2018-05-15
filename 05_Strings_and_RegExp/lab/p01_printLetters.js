/**
 * Created by Ivaylo on 4/30/2018.
 */

function printStringLetters(str) {
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`);
    }
}

printStringLetters("Hello, World!")