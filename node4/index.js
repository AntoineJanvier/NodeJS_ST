/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Character = require('./Character');
let Weapon = require('./Weapon');
let Sword = require('./Sword');
let Gun = require('./Gun');
let scanf = require('scanf');

let w = [];
w[0] = new Gun("G17", 0.2, 0.3, 3000, 1800, 16);
w[1] = new Sword("Orcrist", 1.3, 0.3, 10000, 1000, false, 1980);
w[2] = new Sword("Rebellion", 1.3, 0.3, 20000, 50000, true, 1780);
w[2] = new Sword("FrostMourne", 1.3, 0.3, 20000, 50000, true, 1780);
w[2] = new Sword("Narsil", 1.3, 0.3, 20000, 50000, true, 1780);
w[2] = new Sword("Naidel", 1.3, 0.3, 20000, 50000, true, 1780);


// console.log(w);
console.log('Saisir un nom de joueurs ( > 2 ) : ');
let nb_joueurs = scanf("%d");
let players = [];
for(let i = 0; i < nb_joueurs; i++) {
    console.log('Nom du joueur ' + (i+1) + ' : ');
    players[i] = new Character(scanf('%s'), w[Math.round(Math.random() * 3)])
}
console.log(players+'');

let player_alive = nb_joueurs;
let r = 0;
while(player_alive > nb_joueurs / 2) {
    r = Math.round(Math.random()*(nb_joueurs-1));
    let a = players[r];
    r = Math.round(Math.random()*(nb_joueurs-1));
    let b = players[r];
    if(a != b) {
        if(a.health != 0 && b.health != 0) {
            a.attack(b);
            console.log(a.name + ' attaque ' + b.name);
            if(a.health == 0 || b.health == 0) {
                if(a.health == 0)
                    console.log('MORT de : ' + a.name);
                if(b.health == 0)
                    console.log('MORT de : ' + b.name);
                player_alive--;
            }
        }
    }
}

// let p1 = new Character("Arthur", w[0]);
// console.log(p1+'');
// p1.weapon = w[1];
// console.log(p1+'');
// p1.weapon = w[2];
// console.log(p1+'');