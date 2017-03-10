/**
 * Created by antoine on 10/03/17.
 */
'use strict';

const express = require('express');
const models = require('../models');
const Student = models.Student;
const router = express.Router();

router.get('/', function (req, res) {
    let l = parseInt(req.query.limit) || 20;
    let o = parseInt(req.query.offset) || 0;
    let options = {
        limit: l,
        offset: o
    };
    Student.findAll(options).then(function (students) {
        let result = [];
        for(let s of students)
            result.push(s.responsify());
        res.json(result);
    }).catch(function (err) {
        res.json({
            result: -1
        });
    });
});

router.get('/:student_id', function (req, res) {
    Student.find({
        where: {
            id: req.params.student_id
        }
    }).then(function (s) {
        if(s)
            res.json(s.responsify()); // PRINT STUDENT
        else
            res.json({
                result: 404 // STUDENT NOT FOUND
            })
    }).catch(function (err) {
        res.json({
            result: -1 // SEQUELIZE ERROR
        });
    })
});

router.post('/', function (req, res) {
    let l = req.body.lastname;
    let f = req.body.firstname;
    let bd = req.body.birthdate;

    Student.create({
        lastname: l,
        firstname: f,
        birthdate: bd
    }).then(function (student) {
        res.json(student);
    }).catch(function (err) {
        res.json({
            result: -1
        });
    });
});

module.exports = router;