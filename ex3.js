/**
    * Created by Antoine Janvier
    * on 06/03/17.
    */
"use strict";
const scanf = require('scanf');
const arr = require('./arr');

let array = [];
for(let i = 0; i < 5; i++) {
    console.log('Saisir array[' + i + '] :');
    array.push(scanf('%d'));
}
arr(array);

// let array = [];
// let max = 0;
// let moy = 0;
// for(let i = 0; i < 5; i++) {
//     console.log("Saisir array[" + i + "] :");
//     array[i] = scanf("%d");
//     if(array[i] > max)
//         max = array[i];
//     moy += array[i];
// }
// moy /= 5;
// console.log("Indice du max : " + array.indexOf(max));
// console.log("Moyenne : " + moy);