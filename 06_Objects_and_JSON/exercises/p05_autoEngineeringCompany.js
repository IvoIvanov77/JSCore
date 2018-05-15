/**
 * Created by Ivaylo on 5/4/2018.
 */

function autoEngineeringCompany(input) {
    let brands = new Map();

    for (let line of input) {
        let data = line.split(' | ');
        let brand = data[0];
        let model = data[1];
        let quantity = Number(data[2]);
        if(brands.has(brand)){
            if(brands.get(brand).has(model)){
                brands.get(brand).set(model, brands.get(brand).get(model) + quantity);
            }else{
                brands.get(brand).set(model, quantity);
            }
        }else {
            brands.set(brand, new Map());
            brands.get(brand).set(model, quantity);
        }
    }
    let result = '';
    brands.forEach((v, k) => {
        result += `${k}\n`;
        v.forEach((q, m) => result += `###${m} -> ${q}\n`)

    });
    console.log(result);
}





