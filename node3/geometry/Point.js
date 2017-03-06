/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Point = function (x, y) {
    this.x = x;
    this.y = y;
};
Point.prototype.getX = function () { return this.x; };
Point.prototype.getY = function () { return this.y; };
Point.prototype.setX = function (x) { this.x = x; };
Point.prototype.setY = function (y) { this.y = y; };

Point.prototype.distanceTo = function (p2) {
    let a = Math.pow(this.x - p2.getX(), 2);
    let b = Math.pow(this.y - p2.getY(), 2);
    return Math.sqrt(a + b);
};

Point.prototype.toString = function () {
    return "Point : " + this.x + ', ' + this.y;
};

module.exports = Point;