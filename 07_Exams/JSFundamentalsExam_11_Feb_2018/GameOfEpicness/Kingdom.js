/**
 * Created by Ivaylo on 5/27/2018.
 */

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
