/**
 * Created by Ivaylo on 5/4/2018.
 */

function systemComponents(input) {
    let systems = new Map();

    for (let line of input) {
        let data = line.split(' | ');
        let system = data[0];
        let component = data[1];
        let subComponent = data[2];
        if(systems.has(system)){
            if(systems.get(system).has(component)){
                systems.get(system).get(component).push(subComponent);
            }else{
                systems.get(system).set(component, [subComponent]);
            }
        }else {
            systems.set(system, new Map());
            systems.get(system).set(component, [subComponent]);
        }
    }
    systems.forEach((v, k) => systems.set(k, new Map(Array.from(v.entries()).sort((a, b) =>b[1].length - a[1].length))));
    systems = new Map([...systems.entries()].sort(
        (a, b) => {
            if(a[1].size === b[1].size){
                return a[0].localeCompare(b[0]);
            }
            return b[1].size - a[1].size;
        }));

    let result = '';
    systems.forEach((v, k) => {
        result += `${k}\n`;
        v.forEach((subComps, comp) =>{
            result += `|||${comp}\n`;
            subComps.forEach(s => result += `||||||${s}\n`)
        })
    });

    console.log(result);
}

// systemComponents([
//     "SULS | Main Site | Home Page",
//     "SULS | Main Site | Login Page",
//     "SULS | Main Site | Register Page",
//     "SULS | Judge Site | Login Page",
//     "SULS | Judge Site | Submittion Page",
//     "Lambda | CoreA | A23",
//     "SULS | Digital Site | Login",
//     "Lambda | CoreB | B24",
//     "Lambda | CoreA | A24",
//     "Lambda | CoreA | A25",
//     "Lambda | CoreC | C4",
//     "Indice | Session | Default Storage",
//     "Indice | Session | Default Security"
//
// ]);

