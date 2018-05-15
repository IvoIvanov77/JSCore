/**
 * Created by Ivaylo on 4/28/2018.
 */

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    
}

function tripleDistance(x1, y1, x2, y2, x3, y3) {
    return distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3);
}
// 1 2 3
// 1 3 2
// 2 1 3

function solve(input) {
    [x1, y1, x2, y2, x3, y3] = input;
    let shortestDistance = tripleDistance(x1, y1, x2, y2, x3, y3);
    let path = "1->2->3: ";

    if(tripleDistance(x1, y1, x3, y3, x2, y2) < shortestDistance){
        shortestDistance = tripleDistance(x1, y1, x3, y3, x2, y2);
        path = "1->3->2: ";
    }

    if(tripleDistance(x2, y2, x1, y1, x3, y3) < shortestDistance){
        shortestDistance = tripleDistance(x2, y2, x1, y1, x3, y3);
        path = "2->1->3: ";
    }

    console.log(path + shortestDistance);
}

solve([-1, -2, 3.5, 0, 0, 2]);
