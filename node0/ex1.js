/**
* Created by Antoine Janvier
* on 06/03/17.
*/
"use strict";
const scanf = require('scanf');

console.log("S1 :");
let s1 = scanf("%s");
console.log("S2 :");
let s2 = scanf("%s");

console.log(s1.length * 2 == s2.length ? "OK" : "NOK");