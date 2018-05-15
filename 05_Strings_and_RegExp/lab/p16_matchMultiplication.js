/**
 * Created by Ivaylo on 4/30/2018.
 */

function performMultiplications(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}
