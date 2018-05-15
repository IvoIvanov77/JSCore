

function distance(x1, y1, x2, y2) {

    let point1 = {x:x1, y:y1};
    let point2 = {x:x2, y:y2};

    return  Math.sqrt( Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
}

console.log(distance(2.34, 15.66, -13.55, -2.9985));
