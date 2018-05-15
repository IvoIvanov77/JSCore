/**
 * Created by Ivaylo on 4/27/2018.
 */

function leapYear(year) {
    let isLeap = ((year % 4) === 0  && (year % 100 !== 0))
        || (year % 400 === 0);
    // if(isLeap){
    //     console.log("yes")
    // }else{
    //     console.log("no");
    // }
    console.log(isLeap ? "yes" : "no")
}

leapYear(1999);
