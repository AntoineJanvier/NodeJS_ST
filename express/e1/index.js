/**
* Created by Antoine Janvier
* on 07/03/17.
*/
let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let app = express();

app.use(cookieParser());
/**
 * BodyParser:
 * urlencoded : clé-valeur
 * .json()
 * .text()
 * .raw() : contenu brut comme une image par exemple
 */
// Eviter d'utiliser plusieurs méthodes de bodyParser en simultané
app.use(bodyParser.urlencoded({
    "extended": true,
}));
// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.raw());


// Execution du (des) middleware(s)
app.use(function (req, res, next) {
    // Redirect fonctionne seulement sur du GET
    // if(Math.round(Math.random()*2)%2 ==0)
    //     return res.redirect('/b');
    console.log("Request in");
    next(); // Nécessaire pour poursuivre vers le routing
    //res.end(); // Ferme complètement la connexion
});

require('./routes')(app);

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