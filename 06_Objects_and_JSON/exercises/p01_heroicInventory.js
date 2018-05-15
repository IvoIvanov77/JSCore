/**
 * Created by Ivaylo on 5/4/2018.
 */

function heroicInventory(input) {
    let heroes = [];

    for (let line of input) {
        let[heroName, heroLevel, heroItems] = line.split(" / ");
        heroLevel = Number(heroLevel);
        heroItems = heroItems ? heroItems.split(", ") : [];
        heroes.push({
            name:heroName,
            level:heroLevel,
            items:heroItems
        })
    }
    return JSON.stringify(heroes);
}

// console.log(heroicInventory([
//     "Isacc / 25",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara"
//
// ]));