/**
* Created by antoine on 08/03/17.
*/
'use strict';

let car = 0;
let cars = [];

module.exports = function (app) {
    app.get('/cars/home', function (req, res) {
        res.type('html');
        let h = '<html><body>Resultat : <ul>';
        for(let ac of cars) {
            h += '<li>'+ac+'</li>';
        }
        h+= '</ul></body></html>';
        res.send(h);
    });
    app.get('/cars/random', function (req, res) {
        let idx = Math.round(Math.random() * 100);
        let h2 = '<html><body><ul>';
        h2 += '<li>' + cars[idx] + '</li>';
        h2 += '</ul></body></html>';
        res.send(h2);
    });
    app.get('/cars/add', function (req, res) {
        let c = 'C' + Math.round(Math.random() * 100);
        cars.push(c);
        console.log(cars);
        res.end();
    });
};