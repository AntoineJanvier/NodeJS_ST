/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

const Car = require('./Car');

let c = new Car('C1', 'Citroen', '2012');
console.log(c);
c.gasPedal();
c.gasPedal();
c.gasPedal();
console.log(c);
Car.prototype.stop = function () {
    this.speed = 0;
};
c.stop();
console.log(c);

// String.prototype.randomChar = function () {
//     let idx = Math.random() * this.length;
//     return this.charAt(idx);
// };

let oldCharAt = String.prototype.charAt;
String.prototype.charAt = function (i) {
    let idx = Math.random() * this.length;
    return oldCharAt.call(this, idx);
};

console.log("azertyuiop".charAt(3));
console.log("azertyuiop");
console.log("azertyuiop");
