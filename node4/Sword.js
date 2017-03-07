/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

const Weapon = require('./Weapon');

const Sword = function (config) {
    Weapon.apply(this,arguments);
    this.legendary = config.legendary;
    this.year = config.year;
};

Sword.prototype = new Weapon();
Sword.prototype.constructor = Sword;

Sword.prototype.isLegendary = function () {
    return false;
};
Sword.prototype.bonus = function() {
    if(!this.isLegendary() || this.year == 0) return 0;
    return this.weight / this.year;
};
Sword.prototype.damage = function() {
    if(this.year == 0) return 0;
    let res = this.weight * this.height * this.width;
    res += this.bonus();
    res /= this.year;
    if(!this.isLegendary() || this.year < 10)
        res *= 0.9;
    return res;
};
Sword.prototype.duration = function() {
    if(this.price <= 0) return 0;
    return (this.weight * this.year) / this.price;
};
Sword.prototype.toString = function () {
    return 'Sword=[' + Weapon.prototype.toString.apply(this, arguments) +
        ', legendary=' + this.legendary + ', year=' + this.year + ']';
};

module.exports = Sword;