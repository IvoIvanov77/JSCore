/**
 * Created by Ivaylo on 4/30/2018.
 */

// 'Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'

function extractTextFromParenthesis(text) {
    let arr = [];
    let start = text.indexOf('(');
    let end = text.indexOf(')', start);

    while(start > -1 && end > -1){
        let end = text.indexOf(')', start);
        arr.push(text.substring(start + 1, end));
        start = text.indexOf('(', end + 1);
        end = text.indexOf(')', start);
    }
    return arr.join(', ');
}
