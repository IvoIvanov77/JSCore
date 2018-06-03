/**
 * Created by Ivaylo on 5/27/2018.
 */

function solveWithClasses(kingdoms, fights) {

    let kingdomMap = new Map();

    for (let obj of kingdoms) {
        let kingdomName = obj.kingdom;
        let generalName = obj.general;
        let army = obj.army;
        let general = new General(generalName, army);
        if(!kingdomMap.has(kingdomName)){
            kingdomMap.set(kingdomName, new Kingdom(kingdomName));
        }
        kingdomMap.get(kingdomName).addGeneral(general);
    }

    for (let item of fights) {

        fight(kingdomMap, item);
    }

    function fight(map, input) {
        let attackingKingdom = input[0];
        let defendingKingdom = input[2];
        if(attackingKingdom === defendingKingdom){
            return;
        }
        let attackingGeneral = map.get(attackingKingdom).generals.get(input[1]);
        let defendingGeneral = map.get(defendingKingdom).generals.get(input[3]);
        General.generalFight(attackingGeneral, defendingGeneral);
    }
    let winner = [...kingdomMap.entries()].sort((k1, k2) => k1[1].compareTo(k2[1]))[0][1];

    console.log('Winner: ' + winner.toString());

}
