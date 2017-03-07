/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

const Weapon = require('./Weapon');

let Sword = function (name, hei, wid, wei, price, legendary, year) {
    Weapon.apply(this, arguments);
    this.legendary = legendary;
    this.year = year;
    this.bonus = this.bonus_();
};

Sword.prototype = new Weapon();
Sword.prototype.constructor = Sword;

Sword.prototype.duration_ = function () {
    this.duration = (this.weight * this.year) / this.price;
    return (this.weight * this.year) / this.price;
};
Sword.prototype.damage_ = function () {
    let a = ((this.weight * this.height * this.width) + this.bonus) / this.year;
    if(!this.legendary || this.duration < 10)
        a -= (a * 10) / 100;
    this.damage = a;
    return a;
};
Sword.prototype.bonus_ = function () {
    return (this.weight / this.year + ((this.weight / this.year * 30) / 100));
};
Sword.prototype.toString = function () {
    return '\n\tSword=[\n\t\tname="'+this.name+'", height='+this.height+
        'm, width='+this.width+'m, height='+(this.weight > 1000 ? this.weight / 1000 + 'kg' : this.height + 'g')+
        ', price='+this.price+'$, legendary='+this.legendary+', year='+this.year+'\n\t]';
};


module.exports = Sword;