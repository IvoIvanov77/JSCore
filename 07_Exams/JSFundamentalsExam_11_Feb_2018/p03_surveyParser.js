/**
 * Created by Ivaylo on 5/8/2018.
 */

function surveyParser(input) {

    let surveyDataPattern = /<svg>.*<\/svg>/;
    let validDataFormat = /<svg><cat><text>.*\[(.+)]<\/text><\/cat>\s*<cat>(.*)<\/cat><\/svg>/;
    let validRatingFormat = /<g><val>([1-9]|10)<\/val>(\d+)<\/g>/g;

    if(!surveyDataPattern.test(input)){
        return 'No survey found';
    }

    if(!validDataFormat.test(input)){
        return 'Invalid format'
    }

    let surveyDataMatch = validDataFormat.exec(input);
    let label = surveyDataMatch[1];
    let ratings = surveyDataMatch[2];

    // console.log(label);
    // console.log(ratings);
    let sumOfRatings = 0;
    let countOfRatings = 0;

    let matches = ratings.match(validRatingFormat);
    // console.log(matches);
    for (let m of matches) {
        // console.log(m);
        let ratingMatch = /<g><val>([1-9]|10)<\/val>(\d+)<\/g>/.exec(m);
        sumOfRatings += Number(ratingMatch[2]) *Number(ratingMatch[1]);
        countOfRatings += Number(ratingMatch[2]);
    }

    let average = Math.round(sumOfRatings / countOfRatings *100)/100;

    return `${label}: ${average}`;

}

console.log(surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>'))
