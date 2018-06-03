/**
 * Created by Ivaylo on 5/26/2018.
 */

class Test {
    constructor(name){
        this._count = 0;
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }
}

let test = new Test("Test");

for (let i = 0; i < 5; i++) {
    test.count ++;
}

console.log(test.count)