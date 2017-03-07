/**
* Created by Antoine Janvier
* on 07/03/17.
*/
let express = require('express');
let cookieParser = require('cookie-parser');

let app = express();

// Execution du (des) middleware(s)
app.use(function (req, res, next) {
    console.log("work in progress...");
    next(); // Nécessaire pour poursuivre vers le routing
    //res.end(); // Ferme complètement la connexion
});
app.use(cookieParser());
app.get("/cookies", function (req, res) {
    res.json(req.cookies);
});
app.get("/cookies/create", function (req, res) {
    let k = req.query.key;
    let v = req.query.value;
    if(k && v) {
        res.cookie(k, v, {maxAge: 90000});
        res.json({
            "success": true
        })
    } else {
        res.json({
            "success": false
        })
    }

});

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
// ALL : Pour le reste, 404
app.all('*', function (req, res) {
    console.log('404');
    res.status(404);
    res.type('text');
    res.send('-> NO WAY!');
});

app.listen(1101, function () {
    console.log('Server started on port 1101...');
});

/**
 * Routage des requêtes :
 * app.METHOD(path, callback)
 * METHOD : HTTP etc
 * path : chemin
 * callback
 *      - req (Obj de type Request)
 *      - res (Obj de type Response)
 *      - next (Execute le next handler (middleware))
 */