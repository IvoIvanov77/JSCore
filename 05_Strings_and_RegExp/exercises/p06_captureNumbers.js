/**
 * Created by Ivaylo on 5/1/2018.
 */

function captureNumbers(text){
    if(Array.isArray(text)){
        text = text.join('');
    }
    return text.match(/[0-9]+/g).join(' ');

}


