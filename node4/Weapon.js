/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

let Weapon = function (name, hei, wid, wei, price) {
    this.name = name;
    this.height = hei;
    this.width = wid;
    this.weight = wei; // En grammes
    this.price = price;
    this.duration = this.duration_();
    this.damage = this.damage_();
    this.bonus = this.bonus_();
};

Weapon.prototype.duration_ = function () {
    return ;
};
Weapon.prototype.damage_ = function () {
    return Math.random() * 1000;
};
Weapon.prototype.bonus_ = function () {
    return Math.random() * 1000;
};

module.exports = Weapon;