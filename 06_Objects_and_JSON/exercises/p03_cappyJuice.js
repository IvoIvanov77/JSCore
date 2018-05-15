/**
 * Created by Ivaylo on 5/4/2018.
 */

function cappyJuice(input) {
    let juiceQuantity = new Map();
    let juiceBottles = new Map();

    for (let line of input) {
        let juiceData = line.split(' => ');
        let juice = juiceData[0];
        let quantity = Number(juiceData[1]);
        if(juiceQuantity.has(juice)){
            juiceQuantity.set(juice, juiceQuantity.get(juice) + quantity);
        }else{
            juiceQuantity.set(juice, quantity);
        }
        if(juiceQuantity.get(juice) >= 1000){
            let bottles = Math.floor(juiceQuantity.get(juice) / 1000);
            let remainder = juiceQuantity.get(juice) % 1000;
            if(juiceBottles.has(juice)){
                juiceBottles.set(juice, juiceBottles.get(juice) + bottles);
            }else{
                juiceBottles.set(juice, bottles);
            }
            juiceQuantity.set(juice, remainder);
        }
    }
    let result = '';
    juiceBottles.forEach((v, k) => result += `${k} => ${v}\n`);
    console.log(result);
}

