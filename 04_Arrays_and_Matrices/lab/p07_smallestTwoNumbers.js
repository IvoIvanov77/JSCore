/**
 * Created by Ivaylo on 4/29/2018.
 */


function smallestTwoNumbers(arr){
   let result = arr.sort((a, b) => a - b)
       .slice(0, 2)
       .join(' ');
   console.log(result);

}


