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
    this.duration = Math.random() * 1000;
    this.damage = Math.random() * 1000;
    this.bonus = Math.random() * 1000;
};

module.exports = Weapon;