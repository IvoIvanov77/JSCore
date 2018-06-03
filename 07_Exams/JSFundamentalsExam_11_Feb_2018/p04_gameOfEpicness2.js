/**
 * Created by Ivaylo on 5/26/2018.
 */

function solveWithClasses(kingdoms, fights) {

    class Kingdom{
        constructor(name){
            this._name = name;
            this._generals = new Map;
        }

        addGeneral(general){
            if(this._generals.has(general._name)){
                this._generals.get(general._name).army += general.army;
            }else{
                this._generals.set(general._name, general);
            }
        }


        get name() {
            return this._name;
        }

        get generals() {
            return this._generals;
        }

        get wins(){
            let total = 0;
            for (let obj of this._generals.values()) {
                total += obj.wins;
            }
            return total
        }

        get losses(){
            let total = 0;
            for (let obj of this._generals.values()) {
                total += obj.losses;
            }
            return total
        }

        get sortedGenerals(){
            return [...this._generals.values()].sort((g1, g2) => g2.compareTo(g1));
        }

        toString(){
            let result = this._name + '\n';
            for (let general of this.sortedGenerals) {
                result += general;
            }
            return result;
        }

        compareTo(other){
            if(this.wins === other.wins){
                if(this.losses === other.losses){
                    return this._name.localeCompare(other._name);
                }else{
                    return this.losses - other.losses
                }
            }
            return other.wins - this.wins;
        }
    }

    // ----------------------------------------------------------------------

    class General{
        constructor(name, army){
            this._name = name;
            this._army = army;
            this._wins = 0;
            this._losses = 0;
        }
        get name() {
            return this._name;
        }

        get army() {
            return this._army;
        }

        get wins() {
            return this._wins;
        }

        get losses() {
            return this._losses;
        }


        set name(value) {
            this._name = value;
        }

        set army(value) {
            this._army = value;
        }

        set wins(value) {
            this._wins = value;
        }

        set losses(value) {
            this._losses = value;
        }

        compareTo(other){
            return this.army - other.army;
        }

        static generalFight(g1, g2) {
            function firstGeneralWin(g1, g2) {
                g1.army = Math.floor(g1.army * 1.1);
                g2.army = Math.floor(g2.army * 0.9);
                g1.wins ++;
                g2.losses ++;
            }
            if(g1.army > g2.army){
                firstGeneralWin(g1, g2)
            }else if(g1.army < g2.army){
                firstGeneralWin(g2, g1)
            }
        }

        toString(){
            return `\/\\general: ${this.name}\n---army: ${this.army}\n---wins: ${this.wins}\n---losses: ${this.losses}\n`
        }
    }
    //------------------------------------------------------------------------
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
    //-------------------------------------------------------------------
}

solveWithClasses(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
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