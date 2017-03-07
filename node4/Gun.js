/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

let Weapon = require('./Weapon');

const Gun = function (config) {
    Weapon.apply(this,arguments);
    this.bullets=config.bullets;
};

// let Gun = function(name, hei, wid, wei, price, bullets) {
//     Weapon.apply(this,arguments);
//     this.bullets=bullets;
// };

Gun.prototype = new Weapon();
Gun.prototype.constructor = Gun;

Gun.prototype.bonus = function() {
    if(this.bullets == 0) return 0;
    let res = this.weight % this.bullets;
    if(this.bullets == 0) return 0;
    return (this.bullets * this.weight) / res;
};
Gun.prototype.damage = function() {
    let res = this.height * this.width;
    if(res == 0) return this.bonus();
    return this.weight / res + this.bonus();
};
Gun.prototype.duration = function() {
    if(this.weight <= 0) return 0;
    return (this.price / this.weight) * this.damage();
};
Gun.prototype.toString = function () {
    return 'Gun=[' + Weapon.prototype.toString.apply(this, arguments) + ', bullets=' + this.bullets + ']';
};

module.exports = Gun;