/**
 * Created by Ivaylo on 4/30/2018.
 */

function sortArrayBy2Criteria(arr) {
    let comparator = (a, b) => {
       if(a.length - b.length !== 0 ){
           return a.length - b.length;
       }else {
           if (a.toLowerCase() > b.toLowerCase()) {
               return 1;
           } else if (a.toLowerCase() < b.toLowerCase()) {
               return - 1;
           }
       }
       return 0;

    };
    let result = arr.sort(comparator);
    console.log(result.join('\n'));
}

// sortArrayBy2Criteria(["alpha",
//     "beta",
//     "gamma"
// ])

// sortArrayBy2Criteria([
//     "Isacc",
//     "Theodor",
//     "Jack",
//     "Harrison",
//     "George"
//
// ])

sortArrayBy2Criteria([
    "test",
    "Deny",
    "omen",
    "Default"


])