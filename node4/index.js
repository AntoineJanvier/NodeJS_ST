/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Character = require('./Character');
let Weapon = require('./Weapon');
let Sword = require('./Sword');
let Gun = require('./Gun');
let scanf = require('scanf');

let w = [];
w[0] = new Gun("G17", 0.2, 0.3, 3000, 1800, 16);
w[1] = new Sword("Toto", 1.3, 0.3, 10000, 1000, false, 1980);
w[2] = new Sword("Excalibur", 1.3, 0.3, 20000, 50000, true, 1780);


console.log(w);


// let p1 = new Character("Arthur", g);
// console.log(p1+'');
// p1.weapon = s;
// console.log(p1+'');
// p1.weapon = excalibur;
// console.log(p1+'');