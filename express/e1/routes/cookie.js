/**
* Created by Antoine Janvier
* on 07/03/17.
*/
'use strict';

module.exports = function (app) {
    // Test sur les cookies
    app.get("/cookies", function (req, res) {
        res.json(req.cookies);
    });
    app.get("/set_cookie", function (req, res) {
        res.cookie(req.query["key"], req.query["value"], {maxAge: 9999});
        res.json({
            "result": 1,
        })
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
};