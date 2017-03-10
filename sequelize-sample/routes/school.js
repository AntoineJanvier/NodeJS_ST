/**
* Created by Antoine Janvier on 10/03/17.
*/
'use strict';

const express = require('express');
const models = require('../models');
const School = models.School;
const router = express.Router();

router.get('/', function (req, res) {
    let l = parseInt(req.query.limit) || 20;
    let o = parseInt(req.query.offset) || 0;
    let options = {
        limit: l,
        offset: o
    };
    School.findAll(options).then(function (schools) {
        // let result = [];
        // for(let s of Schools)
        //     result.push(s.responsify());
        res.json(schools);
    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        });
    });
});

router.get('/:school_id', function (req, res) {
    School.find({
        where: {
            id: req.params.school_id
        }
    }).then(function (s) {
        if(s)
            res.json(s); // PRINT SCHOOL
        else
            res.json({
                result: 404 // SCHOOL NOT FOUND
            })
    }).catch(function (err) {
        res.json({
            result: -1, // SEQUELIZE ERROR
            err: err
        });
    })
});

router.post('/', function (req, res) {
    let l = req.body.name;

    School.create({
        name: l,
    }).then(function (School) {
        res.json(School);
    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        });
    });
});

module.exports = router;