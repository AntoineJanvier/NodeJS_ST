/**
 * Created by antoine on 09/03/17.
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const models = require('../models');
const connection = models.database;
const router = express.Router();

router.use(bodyParser.json());

router.get('/', function (req, res) {
    connection.query('SELECT * FROM Computer;', function (err, rows, fields) {
        if(err)
            throw err;
        res.type('json');
        res.send(JSON.stringify(rows, null, 4));
    });
});

router.post('/', function (req, res) {
    res.type('text');
    let brand = req.body.brand;
    let cpu = req.body.cpu;
    let price = req.body.price;
    let sql = `INSERT INTO Computer (brand, cpu, price) VALUES ('${brand}', ${cpu}, ${price});`;
    connection.query(sql, function (err) {
        if(err)
            res.json({
                result: 'Check the manual'
            });
        else
            res.json({
                result: 'Success'
            });
    });
});

router.all('*', function (req, res) {
    res.type('html');
    req.status(404);
    res.send('<html>404</html>');
});

module.exports = router;