/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Weapon = require('./Weapon');

let Character = function (name, weapon) {
    this.name = name;
    this.health = Math.round(25000 + (Math.random() * 25000));
    this.hitChance = Math.round((50 + (Math.random() * 70)) * 100) / 100;
    this.weapon = weapon || new Weapon();
};

Character.prototype.protect = function (degats) {
    this.health -= (degats * 55) / 100;
    this.health = Math.round(this.health);
    if(this.health < 0)
        this.health = 0;
};
Character.prototype.attack = function (c) {
    if(Math.random() * 100 < this.hitChance)
        c.health -= Math.round((this.weapon.damage + ((this.weapon.damage * 13) / 100)));
};

Character.prototype.toString = function () {
    return 'Character=[\n\tname="'+this.name+'", health='+this.health+
        'pv, hitChance='+this.hitChance+'%, '+this.weapon.toString()+'\n]';
};

module.exports = Character;