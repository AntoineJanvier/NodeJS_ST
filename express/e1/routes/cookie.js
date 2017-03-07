/**
 * Created by antoine on 07/03/17.
 */
'use strict';

module.exports = function (app) {
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
};