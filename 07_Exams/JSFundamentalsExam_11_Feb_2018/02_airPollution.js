/**
 * Created by Ivaylo on 5/8/2018.
 */

function airPollution(map, forces) {

    let pollutedBlocks = [];

    let convertedMap = [];

    for (let str of map) {
       convertedMap.push(str.split(' ').map(n => Number(n)));
    }

    for (let force of forces) {
       let forceData = force.split(' ');
       let action = forceData[0];
       let value = Number(forceData[1]);
       switch(action){
           case 'breeze' : {
               let row = convertedMap[value];
               for(let i = 0; i < row.length; i ++){
                   row[i] = row[i] - 15 >= 0 ? row[i] - 15 : 0;
               }
               break;
           }
           case 'gale' : {
               let column = value;
               for(let i = 0; i <convertedMap.length; i ++){
                   convertedMap[i][column] = convertedMap[i][column] - 20 >= 0
                       ? convertedMap[i][column] - 20 : 0;
               }
               break;
           }
           case 'smog' :{
               for(let i = 0; i < convertedMap.length; i ++){
                   for(let j = 0; j < convertedMap[i].length; j ++){
                       convertedMap[i][j] += value;
                   }
               }
           }
       }

    }

    for(let i = 0; i < convertedMap.length; i ++){
        for(let j = 0; j < convertedMap[i].length; j ++){
            if(convertedMap[i][j] >= 50){
                pollutedBlocks.push(`[${i}-${j}]`);
            }
        }
    }

    console.log(pollutedBlocks.length === 0
        ? 'No polluted areas' : 'Polluted areas: ' + pollutedBlocks.join(', '));
}

airPollution(
    [
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
        ["breeze 1", "gale 2", "smog 35"]


);