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
    let d = Math.sqrt(Math.pow((this.x - p.getX()), 2) + Math.pow((this.x - p.getX()), 2));
    return d < this.radius;
};

module.exports = Circle;