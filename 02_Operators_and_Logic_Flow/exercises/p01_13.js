/**
 * Created by Ivaylo on 4/27/2018.
 */

function p01_helloJavaScript(name) {
    console.log(`Hello, ${name}, I am JavaScript!`)
}

function p02_areaAndPerimeter(a, b) {
    let area = a * b;
    let perimeter = 2 * (a + b);
    console.log(area);
    console.log(perimeter);
}

function p03_distanceOverTime(input) {
    function speedInMetersPerSecond( speedKm_h) {
        return speedKm_h * 1000 / 3600
    }
    let firstDistance = speedInMetersPerSecond(input[0]) * input[2];
    let secondDistance = speedInMetersPerSecond(input[1]) * input[2];

    console.log( Math.abs(firstDistance - secondDistance));
}

function p04_distanceIn3D(input) {
    let x1 = input[0];
    let y1 = input[1];
    let z1 = input[2];
    let x2 = input[3];
    let y2 = input[4];
    let z2 = input[5];
    let distance = Math.sqrt(
        Math.pow((x1 - x2), 2) +
        Math.pow((y1 - y2), 2) +
        Math.pow((z1 - z2), 2) ) ;
    console.log(distance);
}

function p05_gradsToDegrees(grads) {
    if(grads < 0){
        grads = Math.abs(400 + grads);
    }
    let degree = grads * 360 / 400;

    console.log(degree % 360);
}

function p06_compoundInterest(input) {
    let sum = input[0];
    let interestRate = input[1] / 100;
    let compoundingPeriod  = 12 / input[2];
    let timeSpan = input[3];

    let result = sum * Math.pow((1 + interestRate / compoundingPeriod), compoundingPeriod * timeSpan);

    console.log(Math.round(result * 100) / 100);
}

function p07_rounding(input) {
    let n = input[0];
    let decimalPlace = input[1];
    if(decimalPlace > 15){
        decimalPlace = 15;
    }
    let result = Math.round(n * Math.pow(10, decimalPlace)) / Math.pow(10, decimalPlace);
    console.log(result);
}

function p08_imperialUnits(inches) {
    let remainder = inches % 12;
    let foots = Math.floor(inches / 12);

    console.log(`${foots}'-${remainder}"`);
}

function p09_nowPlaying(input) {
    let trackName = input[0];
    let artistName = input[1];
    let duration  = input[2];
    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`);
}

function p10_composeTag(input) {
    let location  = input[0];
    let alternateText = input[1];

    console.log(`<img src="${location}" alt="${alternateText}">`);
}

function p11_binaryToDecimal(binaryNumber) {
    console.log(parseInt(binaryNumber, 2))
}

function p12_assignProperties(input) {
    let key1 = input[0];
    let value1 = input[1];
    let key2 = input[2];
    let value2 = input[3];
    let key3 = input[4];
    let value3 = input[5];
    let object = {
        [key1]:value1,
        [key2]:value2,
        [key3]:value3
    };
    return object;
}

function p13_LastMonth(input) {
    let month = input[1];
    let year = input[2];
    let date = new Date();
    date.setFullYear(year, month - 1, 0);
    console.log(date.getDate());
}

























