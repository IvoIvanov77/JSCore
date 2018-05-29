/**
 * Created by Ivaylo on 4/30/2018.
 */

function addRemoveFromArray(commands) {
    let arr = [];
    let item = 1;
    for (let command of commands) {
        if(command === "add"){
            arr.push(item ++);
        }else if(command === "remove"){
            arr.pop();
            item ++
        }
    }
    let string = arr.join('\n');
    console.log(arr.length === 0 ? 'Empty' : arr.join('\n'));
}

// addRemoveFromArray(["add",
//     "add",
//     "remove",
//     "add",
//     "add"
// ]);

// addRemoveFromArray(["add",
//     "remove",
//     "remove",
// ]);