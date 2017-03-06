/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Hippopotamus = require('./Hippopotamus');
let Geometry = require('./geometry');
let Point = Geometry.Point;
let Circle = Geometry.Circle;

let h = new Hippopotamus('Toto', 500, 15);
let h2 = new Hippopotamus('Titi', 520, 17);

console.log('Gagnant : ' + h.fight(h2));

for(let j = 0; j < 21; j++) {
    for(let i = 0; i < 15; i++) {
        h.eat();
        h.eat();
        h.swim();
        h.swim();
        h.swim();
        console.log(h+'');
    }
}

let p = new Point(12, 15);
let p2 = new Point(13, 16);
console.log(p.getX() + ' - ' + p.getY());
p.setX(20);
p.setY(22);
console.log(p.getX() + ' - ' + p.getY());
console.log(p);

let c = new Circle(p, 15);
console.log(c);
console.log(c.area());
console.log(c.containsPoint(p2));