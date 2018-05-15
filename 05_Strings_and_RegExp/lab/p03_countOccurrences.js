/**
 * Created by Ivaylo on 4/30/2018.
 */

function countStringInText(str, text) {

    let count = 0;
    let index = text.indexOf(str);

    while(index > -1){
        count ++;
        index = text.indexOf(str, index + 1);
    }
    return count;
}