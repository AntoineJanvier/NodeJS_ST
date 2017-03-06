/**
 * Created by antoine on 06/03/17.
 */
'use strict';

let Weapon = require('./Weapon');

let Gun = function(bullets) {
    Weapon.apply(this,arguments);
    this.bullets=bullets;
};

Gun.prototype = new Weapon();
Gun.prototype.constructor = Gun;

Gun.prototype.bonus = function() {
    return ((this.bullets * this.weight) / (this.weight % this.bullets));
};
Gun.prototype.damage = function(){
    return (((this.weight) / (this.width*this.height)) + this.bonus());
};
Gun.prototype.duration = function() {
    return ((this.price/this.weight)*this.damage());
};

module.exports = Gun;