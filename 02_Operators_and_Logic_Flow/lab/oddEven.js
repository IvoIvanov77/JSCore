/**
 * Created by Ivaylo on 4/27/2018.
 */

function oddEven(number) {

    if(number % 2 === 0){
        console.log("even");
    }else if(number % 2 === Math.round(number % 2)){
        console.log("odd")
    }else{
        console.log("invalid")
    }

}

oddEven(4.2);
