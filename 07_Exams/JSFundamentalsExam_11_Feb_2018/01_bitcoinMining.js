/**
 * Created by Ivaylo on 5/7/2018.
 */

function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let bitcoinCounter = 0;
    let moneyLeft = 0;
    let firstDay = undefined;
    let dayCounter = 1;

    for (let item of input) {
        let grams = Number(item);
        if(dayCounter % 3 === 0){
            grams -= grams * 0.3;
        }
        moneyLeft += grams * goldPrice;
        if(buyBitcoin() && firstDay === undefined){
            firstDay = dayCounter;
        }
        dayCounter ++;
    }

    function buyBitcoin() {
        if(moneyLeft >= bitcoinPrice){
            let bitcoinToBuy = Math.floor(moneyLeft / bitcoinPrice);
            bitcoinCounter += bitcoinToBuy;
            moneyLeft = moneyLeft - bitcoinToBuy * bitcoinPrice;
            return true;
        }
        return false;
    }

    let result = `Bought bitcoins: ${bitcoinCounter}\n`;
    result += firstDay === undefined ? '' : `Day of the first purchased bitcoin: ${firstDay}\n`;
    result += `Left money: ${moneyLeft.toFixed(2)} lv.`;
    console.log(result);
}

// bitcoinMining([3124.15, 504.212, 2511.124]);