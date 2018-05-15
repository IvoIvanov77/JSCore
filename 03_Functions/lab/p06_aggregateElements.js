/**
 * Created by Ivaylo on 4/28/2018.
 */

function aggregateElements(input) {

    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1 / b);
    aggregate(input, '', (a, b) => a + b);
    
    function aggregate(arr, initialValue, func) {
        let val = initialValue;
        for (let i = 0; i < arr.length; i++)
            val = func(val, arr[i]);
        console.log(val);

    }
}
