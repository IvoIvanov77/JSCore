/**
 * Created by Ivaylo on 4/26/2018.
 */

let point = {x: 5, y: -2};
console.log(point); // Object {x: 5, y: -2}
console.log(typeof(point)); // object
let rect = {name:"my room", width: 4.5, height: 3.5};
rect.name = "old room";
rect.color = "red";
rect.newField = "new field";
console.log(rect); // Object {name: "old room", width: 4.5, height: 3.5, color: "red"}
rect = undefined; // "rect" now has no value
console.log(rect); // undefined

