/**
* Created by Antoine Janvier
* on 07/03/17.
*/
'use strict';

module.exports = function (app) {
    // GET : Racine
    app.get("/", function (req, res) {
        res.type("html");
        res.send("<html><body>RACINE</body></html>");
    });
    // GET : Affiche bonjour avec une couleur donnée en GET
    app.get("/b", function (req, res) {
        res.type("html");
        res.send("<html><body style='color:" + req.query.macouleur + ";'>Bonjour</body></html>");
    });
    app.get('/navigation', function (req, res) {
        res.type('html');
        res.send('<html><body><a href="/b">GO</a></body></html>')
    });
    // GET : Affiche Hello + name
    app.get("/hello/:name", function (req, res) {
        res.json({
            "message": "Hello " + req.params.name + ' !'
        })
    });
    // GET : Répète le message donné
    app.get("/say/:msg", function (req, res) {
        res.type('text');
        res.send(req.params.msg);
    });
    // POST : Ecoute '/post' avec le type POST
    app.post("/post", function (req, res) {
        res.type('text');
        res.send('Type post');
    });
    app.post('/test-body', function (req, res) {
        res.json(req.body);
    })
};