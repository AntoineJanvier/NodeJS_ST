/**
 * Created by antoine on 10/03/17.
 */
'use strict';

const express = require('express');
const models = require('../models');
const Project = models.Project;
const router = express.Router();

router.get('/', function (req, res) {
    let l = parseInt(req.query.limit) || 20;
    let o = parseInt(req.query.offset) || 0;
    let options = {
        limit: l,
        offset: o
    };
    Project.findAll(options).then(function (projects) {
        let result = [];
        for(let s of projects)
            result.push(s.responsify());
        res.json(result);
    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        });
    });
});

router.get('/:project_id', function (req, res) {
    Project.find({
        where: {
            id: req.params.project_id
        }
    }).then(function (s) {
        if(s)
            res.json(s.responsify()); // PRINT SCHOOL
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
    let l = req.body.title;
    let d = req.body.description;
    let rd = req.body.release_date;

    Project.create({
        title: l,
        description: d,
        release_date: rd,
    }).then(function (Project) {
        res.json(Project);
    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        });
    });
});

router.delete('/:project_id', function (req, res, next) {
    Project.find({
        where: {
            id: req.params.project_id
        },
    }).then(function (s) {
        if(s) {
            return s.destroy().then(function () {
                res.json({
                    destroy: "OK"
                })
            })
        }
        res.json({
            result: 404 // PROJECT NOT FOUND
        })
    }).catch(function (err) {
        res.json({
            result: -1, // SEQUELIZE ERROR
            err: err
        });
    })
});

module.exports = router;