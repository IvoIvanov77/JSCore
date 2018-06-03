/**
 * Created by Ivaylo on 5/30/2018.
 */

function solve(base, increment) {
    let size = base;
    let stones = 0;
    let marbles = 0;
    let lapis = 0;
    let step = 1;
    let height = 0;
    let gold = 0;
    for (let size = base; size > 0; size -= 2){
        if(size - 2 <= 0){
            gold += size * size;
            height += increment;
            break;
        }

        let currentStones = (size - 2) * (size - 2);
        stones += currentStones;

        if(step === 5){
            lapis += size * size - currentStones;
        }else{
            marbles += size * size - currentStones;
        }
        height += increment;
        step ++;
        if(step > 5){
            step = 1;
        }
    }

    console.log(`Stone required: ${Math.ceil(stones * increment)}
Marble required: ${Math.ceil(marbles * increment)}
Lapis Lazuli required: ${Math.ceil(lapis * increment)}
Gold required: ${Math.ceil(gold * increment)}
Final pyramid height: ${Math.floor(height)}`)
}
