/**
 * Created by Antoine Janvier
 * on 06/03/17.
 */
"use strict"; // Permet les dernières nouveautés de NodeJS

const scanf = require('scanf');

function say(v, logger) {
    let a = logger || console.log;
    a(v);
}

say("Hello ");
say("World !", function (v) {
    console.log("****" + v + "****");
});

const s = "azertyuiop";
console.log("Length : " + s.length);
console.log("bracket[x] : " + s[2]);
console.log("charAt(x) : " + s.charAt(5));
say(s);

let arr = ["al1", "al2"];
console.log("arr = " + arr);
// For Loop
for(let i = 0; i < arr.length; i++) { console.log(arr[i]); }
for(let item of arr) { console.log(item); } // Valeur
for(let item in arr) { console.log(item); } // Index

let b = function () {
    let k = 2;
    console.log(k);
};
b();

console.log("Ecrire une chaine : ");
let str = scanf("%s");
console.log("Chaine : " + str);
