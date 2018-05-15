/**
 * Created by Ivaylo on 4/29/2018.
 */

function processOddNumbers(arr) {
    let result = arr
        .filter((n, i) => i % 2 === 1)
        .map(n => n * 2)
        .reverse();

    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3])