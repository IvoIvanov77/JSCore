/**
 * Created by Ivaylo on 4/27/2018.
 */

function  circleArea(radius) {

    let area = Math.PI * radius * radius;
    console.log(area);
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);
}

circleArea(5);
