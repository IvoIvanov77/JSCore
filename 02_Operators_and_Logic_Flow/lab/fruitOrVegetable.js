/**
 * Created by Ivaylo on 4/27/2018.
 */


// •	Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
// •	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
// •	All others are unknown

function fruitOrVegetable(food) {
    switch (food){
        case "banana" :
        case "apple" :
        case "kiwi"  :
        case "cherry" :
        case "lemon" :
        case "grapes" :
        case "peach" :
            console.log("fruit");
            break;
        case "tomato" :
        case "cucumber" :
        case "pepper" :
        case "onion" :
        case "garlic" :
        case "parsley":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");

    }
}