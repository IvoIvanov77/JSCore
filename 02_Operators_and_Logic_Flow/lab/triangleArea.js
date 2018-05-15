/**
 * Created by Ivaylo on 4/27/2018.
 */
function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area;

}
