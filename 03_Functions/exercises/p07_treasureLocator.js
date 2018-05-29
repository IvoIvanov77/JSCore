/**
 * Created by Ivaylo on 4/28/2018.
 */

function solve(input) {
    for (let i = 0; i < input.length; i += 2){
        let x = input[i];
        let y = input[i + 1];
        console.log(getIsland(x,y));
    }

    function getIsland(x, y) {
        let isOnTonga = (x, y) =>isOnIsland(x, y, 0, 2, 6, 8) ? "Tonga" : false;
        let isOnTuvalu = (x, y) =>isOnIsland(x, y, 1, 3, 1, 3) ? "Tuvalu" : false;
        let isOnSamoa = (x, y) =>isOnIsland(x, y, 5, 7, 3, 6) ? "Samoa" : false;
        let isOnCook = (x, y) =>isOnIsland(x, y, 4, 9, 7, 8) ? "Cook" : false;
        let isOnTokelau = (x, y) =>isOnIsland(x, y, 8, 9, 0, 1) ? "Tokelau" : false;

        if(isOnTonga(x, y)){
            return isOnTonga(x, y)
        }
        if(isOnTuvalu(x, y)){
            return isOnTuvalu(x, y)
        }
        if(isOnSamoa(x, y)){
            return isOnSamoa(x, y)
        }
        if(isOnCook(x, y)){
            return isOnCook(x, y)
        }
        if(isOnTokelau(x, y)){
            return isOnTokelau(x, y)
        }
        return "On the bottom of the ocean"
    }



    function isOnIsland(x, y, xMin, xMax, yMin, yMax) {
        if(x >= xMin && x <= xMax){
            if(y >= yMin && y <= yMax){
                return true
            }
        }
        return false;
    }

}

solve([4, 2, 1.5, 6.5, 1, 3]);