/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';

let Hippopotamus = function (name, weight, tusksSize) {
    this.name = name;
    this.weight = weight;
    this.tusksSize = tusksSize;
};
Hippopotamus.prototype.swim = function () {
    this.weight -= 0.3;
    if(this.weight < 0)
        this.weight = 0;
};
Hippopotamus.prototype.eat = function () {
    this.weight += 1;
};
Hippopotamus.prototype.fight = function (h) {
    return this.tusksSize > h.tusksSize ? this : h;
};
Hippopotamus.prototype.toString = function () {
    return "Hippo : " + this.name + ', ' + this.weight + 'kg, ' + this.tusksSize;
};

module.exports = Hippopotamus;