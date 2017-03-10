/**
 * Created by antoine on 10/03/17.
 */
'use strict';

const express = require('express');
const models = require('../models');
const Student = models.Student;
const School = models.School;
const Project = models.Project;
const router = express.Router();

router.get('/', function (req, res) {
    let l = parseInt(req.query.limit) || 20;
    let o = parseInt(req.query.offset) || 0;
    let options = {
        limit: l,
        offset: o,
        include: [
            models.School,
            models.Project
        ]
    };
    Student.findAll(options).then(function (students) {
        let result = [];
        for(let s of students)
            result.push(s.responsify());
        res.json(result);
    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        });
    });
});

router.get('/:student_id', function (req, res) {
    Student.find({
        where: {
            id: req.params.student_id
        },
        include: [
            models.School,
            models.Project
        ]
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
    let s = req.body.school_id;
    Student.create({
        lastname: l,
        firstname: f,
        birthdate: bd,
        school_id: s
    }).then(function (student) {
        res.json(student);
    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        });
    });
});

router.post('/:student_id/project/:project_id', function (req, res) {
    Student.find({
        where: {
            id: req.params.student_id
        }
    }).then(function (student) {
        if(student) {
            return models.Project.find({
                where: {
                    id: req.params.project_id
                }
            }).then(function (project) {
                if(project) {
                    return student.addProject(project).then(function () {
                        res.json({
                            add_project: "OK"
                        })
                    })
                }
            }).catch(function (err) {
                res.json({
                    result: -1,
                    err: err
                })
            })
        }

    }).catch(function (err) {
        res.json({
            result: -1,
            err: err
        })
    })
});

router.delete('/:student_id', function (req, res, next) {
    Student.find({
        where: {
            id: req.params.student_id
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
            result: 404 // STUDENT NOT FOUND
        })
    }).catch(function (err) {
        res.json({
            result: -1, // SEQUELIZE ERROR
            err: err
        });
    })
});

module.exports = router;