/**
 * Created by Ivaylo on 5/3/2018.
 */

function jsonToHtmlTable(jsonString) {

    let objArr = JSON.parse(jsonString);
    let html = '<table>\n';
    html += '<tr>';
    for (let key of Object.keys(objArr[0])) {
        html += `<th>${htmlEscape(key.toString())}</th>`;
    }
    html += '</tr>\n';
    for (let obj of objArr) {
        html += '<tr>';
        for(let value of Object.values(obj)){
            html += `<td>${htmlEscape(value.toString())}</td>`;
        }
        html += '</tr>\n'
    }

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }



    return html += '</table>\n';
}

