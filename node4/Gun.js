/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

let Weapon = require('./Weapon');

let Gun = function(name, hei, wid, wei, price, bullets) {
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
Gun.prototype.toString = function () {
    return '\n\tGun=[\n\t\tname"'+this.name+'", height='+this.height+
        'm, width='+this.width+'m, weight='+(this.weight > 1000 ? this.weight / 1000 + 'kg' : this.height + 'g')+
        ', price='+this.price+'$, bullets='+this.bullets+'\n\t]';
};

module.exports = Gun;