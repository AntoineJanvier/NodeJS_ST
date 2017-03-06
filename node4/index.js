/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Character = require('./Character');
let Weapon = require('./Weapon');
let Sword = require('./Sword');
let Gun = require('./Gun');

let g = new Gun(20);
let s = new Sword("Toto", 1.3, 0.3, 10000, 1000, false, 1980);
let excalibur = new Sword("Excalibur", 1.3, 0.3, 20000, 50000, true, 1780);

let p1 = new Character("Arthur", excalibur);
console.log(p1);