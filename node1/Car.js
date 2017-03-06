/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

let Car = function (model, brand, year) {
    this.model = model;
    this.brand = brand;
    this.year = year || 2017;
    this.speed = 0;
};
Car.prototype.gasPedal = function () {
    this.speed += 10;
};
Car.prototype.toString = function () {
    return 'Je suis une voiture';
};

module.exports = Car;