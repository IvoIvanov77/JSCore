/**
 * Created by Ivaylo on 4/26/2018.
 */

function countLetter(str, letter) {
    let count = 0;
    for(let ch of str){
        if(ch === letter){
            count ++
        }
    }
    return count;
}

console.log(countLetter("hello", "l"));
