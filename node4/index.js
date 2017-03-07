/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
let Character = require('./Character');
let Weapon = require('./Weapon');
let Sword = require('./Sword');
let Gun = require('./Gun');
let Armor = require('./Armor');
let scanf = require('scanf');

let w = [];
w[0] = new Gun("G17", 0.2, 0.3, 3000, 1800, 16);
w[1] = new Sword("Orcrist", 1.3, 0.3, 10000, 1000, false, 1980);
w[2] = new Sword("Rebellion", 1.3, 0.3, 20000, 50000, true, 1780);
w[3] = new Sword("FrostMourne", 1.3, 0.3, 20000, 50000, true, 1780);
w[4] = new Sword("Narsil", 1.3, 0.3, 20000, 50000, true, 1780);
w[5] = new Sword("Naidel", 1.3, 0.3, 20000, 50000, true, 1780);

console.log('Saisir un nom de joueurs ( > 2 ) : ');
let nb_joueurs = scanf("%d");
let players = [];
for(let i = 0; i < nb_joueurs; i++) {
    console.log('Nom du joueur ' + (i+1) + ' : ');
    players[i] = new Character(scanf('%s'), w[Math.round(Math.random() * 3)])
}

let r1 = 0;
let r2 = 0;
while(players.length > nb_joueurs / 2) {
    r1 = Math.round(Math.random()*(players.length-1));
    let a = players[r1];
    r2 = Math.round(Math.random()*(players.length-1));
    let b = players[r2];
    if(a != b) {
        if(a.health != 0 && b.health != 0) {
            console.log(a.name + ' attaque ' + b.name);
            a.attack(b);
            if(a.health == 0 || b.health == 0) {
                if(a.health == 0) {
                    console.log('\tMORT de : ' + a.name);
                    players.splice(r1, 1);
                }
                if(b.health == 0) {
                    console.log('\tMORT de : ' + b.name);
                    players.splice(r2, 1);
                }
            }
        }
    }
}