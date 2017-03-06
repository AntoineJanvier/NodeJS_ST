/**
    * Created by Antoine Janvier
    * on 06/03/17.
    */
"use strict";
const scanf = require('scanf');

console.log("Somme de 1 à X : ");
let nb = scanf("%d");
let sum = 0;
for(let i = 1; i <= nb; i++) {
    sum += i;
}
console.log("Somme = " + sum);