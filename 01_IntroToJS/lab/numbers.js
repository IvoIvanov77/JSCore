/**
 * Created by Ivaylo on 4/26/2018.
 */

function printRandNum() {
    let num = Math.round(
        Math.random() * 100);
    document.body.innerHTML +=
        `<div>${num}</div>`;
}

