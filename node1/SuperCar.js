/**
 * Created by Antoine Janvier
 * on 06/03/17.
 */
'use strict';
const Car = require('./Car');

let SuperCar = function () {
    Car.apply(this, arguments);
};

SuperCar.prototype = new Car();
SuperCar.prototype.constructor = SuperCar;

SuperCar.prototype.gasPedal = function () { this.speed += 100; };
SuperCar.prototype.toString = function () {
    let r = Car.prototype.toString.apply(this, arguments);
    return r + ' qui va vite !';
};

module.exports = SuperCar;