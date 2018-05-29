/**
 * Created by Ivaylo on 4/28/2018.
 */

function solve(n) {
    let symbols = [['A','T'],['C','G'],['T','T'],['A','G'],['G','G']];

    let index = 0;
    for (let i =0; i < n; i++) {
        let rowIndex = i % 4;
        let symbolsIndex = index % 5;
        switch (rowIndex) {
            case 0 : console.log(`**${symbols[symbolsIndex][0]}${symbols[symbolsIndex][1]}**`); break;
            case 1 : console.log(`*${symbols[symbolsIndex][0]}--${symbols[symbolsIndex][1]}*`); break;
            case 2 : console.log(`${symbols[symbolsIndex][0]}----${symbols[symbolsIndex][1]}`); break;
            case 3 : console.log(`*${symbols[symbolsIndex][0]}--${symbols[symbolsIndex][1]}*`); break;
        }
        index ++;
    }


}

solve(10)

// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*
