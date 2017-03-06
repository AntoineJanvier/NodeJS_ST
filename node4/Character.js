/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Weapon = require('./Weapon');

let Character = function (name, weapon) {
    this.name = name;
    this.health = 25000 + (Math.random() * Math.random()+25000);
    this.hitChance = 50 + (Math.random() * 70);
    this.weapon = weapon || new Weapon();
};

Character.prototype.protect = function (degats) {
    this.health -= (degats * 55) / 100;
    if(this.health < 0)
        this.health = 0;
};
Character.prototype.attack = function (c) {
    if(Math.random() * 100 < this.hitChance)
        c.health -= (this.weapon.damage + ((this.weapon.damage * 13) / 100) );
};

Character.prototype.toString = function () {
    return 'Character=['+this.name+', '+this.health+', '+this.hitChance+', w:'+this.weapon.toString()+']';
};

module.exports = Character;