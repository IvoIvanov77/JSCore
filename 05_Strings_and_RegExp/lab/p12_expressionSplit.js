/**
 * Created by Ivaylo on 4/30/2018.
 */

function expressionSplit(expression) {
    let elements = expression.split(/[\s.();,]+/);
    return elements.join('\n');
}