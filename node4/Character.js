/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Weapon = require('./Weapon');
let Armor = require('./Armor');

let Character = function (name, weapon, armor) {
    this.name = name;
    this.health = Math.round(1500 + (Math.random() * 5000));
    this.hitChance = Math.round((50 + (Math.random() * 70)) * 100) / 100;
    this.weapon = weapon || new Weapon();
    this.armor = armor;
};

Character.prototype.protect = function (damages) {
    this.health -= (damages * 55) / 100;
    if(this.health < 0)
        this.health = 0;
};
Character.prototype.attack = function (c) {
    let damages = Math.round((this.weapon.damage + ((this.weapon.damage * 13) / 100)));
    console.log('\td='+damages);
    if(this.armor != undefined) {
        damages = damages - ((damages * this.armor.absorb) / 100);
    }
    console.log('\td='+damages);
    if(Math.random() * 100 < this.hitChance)
        c.protect(damages);
    else {
        this.health -= damages;
        if(this.health < 0)
            this.health = 0;
    }

};

Character.prototype.toString = function () {
    return '\nCharacter=[\n\tname="'+this.name+'", health='+this.health+
        'pv, hitChance='+this.hitChance+'%, '+this.weapon.toString()+'\n]';
};

module.exports = Character;