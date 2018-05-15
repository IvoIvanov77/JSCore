/**
 * Created by Ivaylo on 4/27/2018.
 */

// <div class="chessboard">
//     <div>
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>
//     </div>
//     <div>
//     <span class="white"></span>
//     <span class="black"></span>
//     <span class="white"></span>
//     </div>
//     <div>
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>
//     </div>
//     </div>

function chessBoard(n) {

    let html = '<div class="chessboard">\n';
    for (let row = 0; row < n; row++) {
        html += '  <div>\n';
        let color = (row % 2 === 0) ? 'black' : 'white';
        for (let col = 0; col < n; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color === 'white') ? 'black' : 'white';
        }
        html += '  </div>\n';
    }
    return html + '</div>';
}

console.log(chessBoard(5));
