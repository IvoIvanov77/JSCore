/**
 * Created by Ivaylo on 5/4/2018.
 */

function cityMarkets(input) {
    let towns = new Map();

    for (let sale of input) {
        let[town, product, quantity, price] = sale.split(/\s+->\s+|\s+:\s+/);
        if(towns.has(town)){
            if(towns.get(town).has(product)){
                towns.get(town).set(product, towns.get(town).get(product) +
                Number(price) * Number(quantity));
            }else{
                towns.get(town).set(product, Number(price) * Number(quantity));
            }
        }else {
            let products = new Map();
            products.set(product, Number(quantity * Number(price)));
            towns.set(town, products);
        }
    }
    let result = '';
    Array.from(towns.keys()).forEach(town => {
        result += `Town - ${town}\n`;
            Array.from(towns.get(town).keys())
                .forEach(product => result += `$$$${product} : ${towns.get(town).get(product)}\n`)
        });

    console.log(result)
}

