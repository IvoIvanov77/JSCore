/**
 * Created by Ivaylo on 4/29/2018.
 */
function sumLastKNumbersSequence(n, k)  {
    let seq = [1];

    for(let index = 1; index < n; index ++){
        let start = Math.max(0, index - k);
        let arr = seq.slice(start, index);

        let sum = 0;
        for (let obj of arr) {
            sum += obj;
        }
        seq.push(sum)
    }
    console.log(seq.join(' '));
}

// sumLastKNumbersSequence(8, 2);