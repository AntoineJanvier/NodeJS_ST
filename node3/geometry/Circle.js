/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Point = require('./Point');

let Circle = function (point, radius) {
    this.center = point || new Point();
    this.radius = radius;
};
Circle.prototype.area = function () {
    return (Math.PI * this.radius * this.radius);
};
Circle.prototype.containsPoint = function (p) {
    return this.center.distanceTo(p) < this.radius;
};
Circle.prototype.toString = function () {
    return "Circle : " + this.center.x + ', ' + this.center.y + ', rad: ' + this.radius;
};

module.exports = Circle;