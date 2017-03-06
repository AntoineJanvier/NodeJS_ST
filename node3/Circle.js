/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Point = require('./Point');

let Circle = function (point, radius) {
    this.point = point;
    this.radius = radius;
};
Circle.prototype.area = function () {
    return (Math.PI * this.radius * this.radius);
};
Circle.prototype.containsPoint = function (p) {
    let a = this.point.x - p.getX();
    a *= a;
    let b = this.point.y - p.getY();
    b *= b;
    let d = Math.sqrt(a + b);
    return d < this.radius;
};
Circle.prototype.toString = function () {
    return "Circle : " + this.point.x + ', ' + this.point.y + ', rad: ' + this.radius;
};

module.exports = Circle;