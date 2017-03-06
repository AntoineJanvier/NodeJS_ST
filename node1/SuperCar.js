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

module.exports = SuperCar;