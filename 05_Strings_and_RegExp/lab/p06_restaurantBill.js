/**
 * Created by Ivaylo on 4/30/2018.
 */

function printBill(input) {

    let items = input.filter((item, i) => i % 2 === 0);
    let sum = input.filter((item, i) => i % 2 === 1)
        .map(Number).reduce((a, b) => a + b);

    return `You purchased ${items.join(', ')} for a total sum of ${sum}`;
}
