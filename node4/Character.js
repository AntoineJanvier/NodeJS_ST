/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Weapon = require('./Weapon');
let Armor = require('./Armor');

// const Character = function () {
//
// }
let Character = function (name, weapon, armor) {
    this.name = name;
    this.health = Math.round(1500 + (Math.random() * 5000));
    this.hitChance = (Math.round(50 + (Math.random() * 20)) * 100) / 100;
    this.weapon = weapon || new Weapon();
    this.armor = armor;
};

Character.prototype.protect = function (damages) {
    this.health -= damages * 0.45;
};
Character.prototype.attack = function (c) {
    if(this.weapon != undefined && Math.random() * 100 < this.hitChance) {
        c.protect(this.weapon.damage() * 1.13);
    }
};

Character.prototype.toString = function () {
    return '\nCharacter=[\n\tname="'+this.name+'", health='+this.health+
        'pv, hitChance='+this.hitChance+'%, '+this.weapon.toString()+'\n]';
};

module.exports = Character;