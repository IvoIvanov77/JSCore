/**
 * Created by Ivaylo on 5/4/2018.
 */

function storeCatalogue(input) {

    let resultMap = new Map();

    for (let line of input) {
        let data = line.split(' : ');
        let startLetter = data[0][0];
        if(resultMap.has(startLetter)){
            resultMap.get(startLetter).push(`${data[0]}: ${data[1]}`);
        }else{
            resultMap.set(startLetter, [`${data[0]}: ${data[1]}`]);
        }
    }
    resultMap = new Map(Array.from(resultMap.entries()).sort());
    let result = '';
    resultMap.forEach((v, k) => {
       result += `${k}\n`;
       v.sort().forEach(item => result += `  ${item}\n`)
    });
    console.log(result);
}

