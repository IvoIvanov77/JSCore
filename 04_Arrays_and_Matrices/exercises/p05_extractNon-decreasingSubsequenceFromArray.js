/**
 * Created by Ivaylo on 4/30/2018.
 */
function extractNonDecreasingSubSequence(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > biggest){
            result.push(arr[i]);
            biggest = arr[i];
        }
    }
    console.log(result.join('\n'));
}

// extractNonDecreasingSubSequence([
//     11,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24
// ]);