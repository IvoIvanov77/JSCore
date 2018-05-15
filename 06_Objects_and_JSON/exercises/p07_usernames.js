/**
 * Created by Ivaylo on 5/4/2018.
 */

function userNames(input) {
    let uniqueUserNames = new Set(input);
    let arr = [...uniqueUserNames].sort((a, b) =>{
        if(a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;

    });
    console.log(arr.join('\n'));
}

function userNames_02(input) {
    return [...new Set(input)].sort(
        (a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length
    ).join('\n');
}

userNames([
    "Ashton","Ashton","Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "B",
    "Bil",
    "Billy",
    "Braston"

])