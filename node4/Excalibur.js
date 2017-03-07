/**
* Created by Antoine Janvier
* on 07/03/17.
*/
const Sword = require('./Sword');

const Excalibur = function () {
    Sword.apply(this, arguments);
    this.name = 'Excalibur';
};

Excalibur.prototype = new Sword();
Excalibur.prototype.constructor = Excalibur;

Excalibur.prototype.isLegendary = function () {
    return true;
};

module.exports = Excalibur;