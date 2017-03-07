/**
* Created by Antoine Janvier
* on 07/03/17.
*/
'use strict';

let Armor = function (name, abs) {
    this.name = name;
    this.absorb = abs;
};

Armor.prototype.toString = function () {
    return '\n\tArmor=[\n\t\tname="'+this.name+'", absorb=' + this.absorb + '%]';
};

module.exports = Armor;