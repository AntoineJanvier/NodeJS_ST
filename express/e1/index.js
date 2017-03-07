/**
* Created by Antoine Janvier
* on 07/03/17.
*/
let express = require('express');
let cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

require('./routes')(app);

// Execution du (des) middleware(s)
app.use(function (req, res, next) {
    console.log("work in progress...");
    next(); // Nécessaire pour poursuivre vers le routing
    //res.end(); // Ferme complètement la connexion
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