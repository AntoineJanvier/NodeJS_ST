/**
 * Created by antoine on 07/03/17.
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
// Test sur les cookies
    app.get("/set_cookie", function (req, res) {
        res.cookie(req.query["key"], req.query["value"], {maxAge: 9999});
        res.json({
            "result": 1,
        })
    });
// POST : Ecoute '/post' avec le type POST
    app.post("/post", function (req, res) {
        res.type('text');
        res.send('Type post');
    });
};