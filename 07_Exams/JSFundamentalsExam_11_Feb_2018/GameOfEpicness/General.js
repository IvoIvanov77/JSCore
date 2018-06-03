/**
 * Created by Ivaylo on 5/27/2018.
 */
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