/**
    * Created by Antoine Janvier
    * on 06/03/17.
    */
"use strict";
const scanf = require('scanf');

let arr = [];
let max = 0;
let moy = 0;
for(let i = 0; i < 5; i++) {
    console.log("Saisir arr[" + i + "] :");
    arr[i] = scanf("%d");
    if(arr[i] > max)
        max = arr[i];
    moy += arr[i];
}
moy /= 5;
console.log("Indice du max : " + arr.indexOf(max));
console.log("Moyenne : " + moy);