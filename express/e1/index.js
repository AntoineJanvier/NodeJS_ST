/**
* Created by Antoine Janvier
* on 07/03/17.
*/
let express = require('express');

let app = express();

app.get("/", function (req, res) {
    res.type("html");
    res.send("<html><body>RACINE</body></html>");
}).get("/hello/:name", function (req, res) {
    res.json({
        "message": "Hello " + req.params.name + ' !'
    })
});

app.listen(1101, function () {
    console.log('Server started on port 1101');
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