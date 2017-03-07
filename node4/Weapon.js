/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

const Weapon = function (config) {
    config = config || {};
    this.name = config.name;
    this.height = config.height;
    this.width = config.width;
    this.weight = config.weight;
    this.price = config.price;
    this.duration = Math.random() * 1000;
    this.damage = Math.random() * 1000;
    this.bonus = Math.random() * 1000;
};

Weapon.prototype.toString = function () {
    return '\n\tWeapon=[\n\t\tname="' + this.name + '", height=' + this.height +
        'm, width=' + this.width + 'm, height=' + (this.weight > 1000 ? this.weight / 1000 + 'kg' : this.height + 'g') +
        ', price=' + this.price+'$\n\t]';
};

// let Weapon = function (name, hei, wid, wei, price) {
//     this.name = name;
//     this.height = hei;
//     this.width = wid;
//     this.weight = wei; // En grammes
//     this.price = price;
//     this.duration = Math.random() * 1000;
//     this.damage = Math.random() * 1000;
//     this.bonus = Math.random() * 1000;
// };

module.exports = Weapon;