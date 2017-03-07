/**
* Created by Antoine Janvier
* on 07/03/17.
*/
const Weapon = require('./Weapon');

let w = new Weapon({
    name: 'FrostMourne',
    width: 0.352,
    height: 1.235,
    weight: 13500,
    price: 1000000
});
console.log(w+'');