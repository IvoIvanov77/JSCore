/**
 * Created by Ivaylo on 5/26/2018.
 */

function solve(kingdoms, fights){

    let kingdomMap = new Map();

    for (let obj of kingdoms) {
        let kingdom = obj.kingdom;
        let general = obj.general;
        let army = obj.army;
        if(kingdomMap.has(kingdom)){
            if(kingdomMap.get(kingdom).has(general)){
                kingdomMap.get(kingdom).get(general).army = kingdomMap.get(kingdom).get(general).army + army;
            }else{
                let generalObj = createGeneral(general, army);
                kingdomMap.get(kingdom).set(general, generalObj);
            }
        }else{
            let generalMap = new Map();
            let generalObj = createGeneral(general, army);
            generalMap.set(general, generalObj);
            kingdomMap.set(kingdom, generalMap);
        }
    }

    for (let item of fights) {
        fight(kingdomMap, item);
    }

    let winner = [...kingdomMap.entries()].sort((k1, k2) => {
        if(getWinsAndLosses(k1[1], 'wins') === getWinsAndLosses(k2[1], 'wins')){
            if(getWinsAndLosses(k1[1], 'loss') === getWinsAndLosses(k2[1], 'loss')){
                return k1[0].localeCompare(k2[0]);
            }else{
                return getWinsAndLosses(k1[1], 'loss') - getWinsAndLosses(k2[1], 'loss')
            }
        }
        return getWinsAndLosses(k2[1], 'wins') - getWinsAndLosses(k1[1], 'wins');
    })[0][0];
    console.log('Winner: ' + winner);
    [...kingdomMap.get(winner).values()].sort((g1, g2) => {
        return g2.compareTo(g1)
    }).forEach(g => console.log(g.toString()));

    function createGeneral(general, army) {
        return {
            _name: general,
            army : army,
            wins : 0,
            loss : 0,
            compareTo: function(other){
                return this.army - other.army;
            },
            toString: function () {
                return `\/\\general: ${this._name}\n---army: ${this.army}\n---wins: ${this.wins}\n---losses: ${this.loss}`
            }
        }
    }

    function getWinsAndLosses(map, property) {
        let total = 0;
        for (let obj of map.values()) {
            total += obj[property];
        }
        return total;
    }

    function fight(map, input) {
        let attackingKingdom = input[0];
        let defendingKingdom = input[2];
        if(attackingKingdom === defendingKingdom){
            return;
        }
        let attackingGeneral = map.get(attackingKingdom).get(input[1]);
        let defendingGeneral = map.get(defendingKingdom).get(input[3]);
        generalFight(attackingGeneral, defendingGeneral)
    }

    function generalFight(g1, g2) {
        function firstGeneralWin(g1, g2) {
            g1.army = Math.floor(g1.army * 1.1);
            g2.army = Math.floor(g2.army * 0.9);
            g1.wins ++;
            g2.loss ++;
        }
        if(g1.army > g2.army){
            firstGeneralWin(g1, g2)
        }else if(g1.army < g2.army){
            firstGeneralWin(g2, g1)
        }
    }
}

solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);

