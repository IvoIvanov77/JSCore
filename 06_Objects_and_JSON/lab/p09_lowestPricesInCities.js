
function lowestPriceInCities(input) {
    let products = new Map();

    for (let line of input) {
        let[town, product, price]= line.split(/\s*\|\s*/);
        if(products.has(product)){
            if(products.get(product).price > Number(price)){
                products.get(product).price = Number(price);
                products.get(product).town = town;
            }
        }else {
            let obj = {price:Number(price), town:town};
            products.set(product, obj);
        }
    }

    let result = '';
    Array.from(products.keys()).forEach(
        product => result +=
            `${product} -> ${products.get(product).price}` +
            ` (${products.get(product).town})\n`
    );

    console.log(result)
}




// lowestPriceInCities([
//     "Sample Town | Sample Product | 1000",
//     "Sample Town | Orange | 2",
//     "Sample Town | Peach | 1",
//     "Sofia | Orange | 3",
//     "Sofia | Peach | 2",
//     "New York | Sample Product | 1",
//     "New York | Burger | 10"
//
// ]);
//
