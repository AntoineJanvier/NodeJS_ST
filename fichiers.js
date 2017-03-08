/**
* Created by antoine on 08/03/17.
*/
'use strict';

let fs = require('fs');

// Lecture
// Synchrone
let res = fs.readFileSync("test.txt");
// Asynchrone
let res2 = fs.readFile("test.txt", function (err, data) {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});
console.log("Script ok");

//Ecriture
// Synchrone
fs.writeFileSync("test.txt", "Hello");
// Asynchrone
fs.writeFile("test.txt", "Hello", function (err) {
    if(err)
        throw err;
    console.log("write OK");
});
console.log("Script ok");

// Tester l'existence
try {
    let stat = fs.statSync("test.txt");
    console.log("OK");
} catch(err) {
    console.log("File not found");
}
// A préférer
fs.stat("none.txt", function (err, stat) {
    if(err)
        console.log("File not found");
    else
        console.log("OK");
});
