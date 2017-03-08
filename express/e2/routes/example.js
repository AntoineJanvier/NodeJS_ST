/**
* Created by antoine on 08/03/17.
*/
'use strict';

let s = [];
const models = require('../model');
const Student = models.Student;

module.exports = function (app) {
    app.get("/students", function (req, res) {
        res.type("html");
        if(req.query.nom && req.query.prenom && req.query.age) {
            addUser(req.query.nom, req.query.prenom, req.query.age);
            res.redirect('/students');
        }
        let ht = '<html><body><ul>';
        let nb = 0;
        for(let p of s) {
            ht += '<li>' + p + '</li>' + '<button onclick="deleteUser(' + nb + ')">Delete</button>';
            nb++;
        }
        ht += '</ul><a href="/students/form">Add a new user</a></body></html>';
        res.send(ht);
    });
    app.get("/students/form2", function (req, res) {
        res.type("html");
        if(req.query.nom && req.query.prenom && req.query.age) {
            addUser(req.query.nom, req.query.prenom, req.query.age);
            res.redirect('/students');
        } else {
            let h = '<html><body>';
            h+= '<form method="GET" action="">' +
                '<input type="text" placeholder="prenom" name="prenom">' +
                '<input type="text" placeholder="nom" name="nom">' +
                '<input type="number" name="age">' +
                '<input type="submit" value="OK">' +
                '</form>';
            h += '</body></html>';
            res.send(h);
        }
    });
    app.get("/students/form", function (req, res) {
        res.type("html");
        if(req.query.nom && req.query.prenom && req.query.age) {
            addUser(req.query.nom, req.query.prenom, req.query.age);
            res.redirect('/students');
        } else {
            let h = '<html><body>';
            h+= '<form method="post" action="/students/add">' +
                '<input type="text" placeholder="prenom" name="prenom">' +
                '<input type="text" placeholder="nom" name="nom">' +
                '<input type="number" name="age">' +
                '<input type="submit" value="OK">' +
                '</form>';
            h += '</body></html>';
            res.send(h);
        }
    });
    app.post("/students/add", function (req, res) {
        res.type("html");
        addUser(req.body.nom, req.body.prenom, req.body.age);
        res.redirect('/students');
    });
};

function addUser(a, b, c) {
    let toAdd = new Student({
        nom: a,
        prenom: b,
        age: c
    });
    s.push(toAdd);
}
function removeUser(a) {
    s.splice(a, 1);
}