/**
 * Created by Ivaylo on 5/3/2018.
 */

function scoreToHTML(jsonStr){
    let objArr = JSON.parse(jsonStr);
    let result = '<table>\n';
    result += '<tr><th>name</th><th>score</th></tr>\n';
    for (let obj of objArr) {
        result += `<tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`
    }

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    return result += '</table>\n';

}



console.log(scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'))

// <table>
// <tr><th>name</th><th>score</th></tr>
// <tr><td>Pesho &amp; Kiro</td><td>479</td></tr>
// <tr><td>Gosho, Maria &amp; Viki</td><td>205</td></tr>
// </table>
