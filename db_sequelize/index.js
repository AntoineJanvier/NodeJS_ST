/**
 * Created by antoine on 09/03/17.
 */
'use strict';
const models = require('./models');
const Student = models.Student;

// Insertion
Student.create({
    "name": "Toto"
}).then(function (u) {
    if(u) {
        console.log("Student created");
        User.console();
    }
}).catch(function (err) {
    throw err;
});
// Select
Student.findAll().then(function (users) {
    if(users)
        console.log(users);
}).catch(function (err) {
    throw err;
});
// Select WHERE
Student.find({
    "where": {
        "id": 1
    }
}).then(function (user) {
    if(user)
        console.log(user);
    else
        console.log("Not found");
}).catch(function (err) {
    throw err;
});
// Delete
Student.find({
    "where": {
        "id": 1
    }
}).then(function (user) {
    if(user)
        user.destroy().then(function (user) {
            console.log("DELETED");
        }).catch(function (err) {
            throw err;
        });
    else
        console.log("Not found");
}).catch(function (err) {
    throw err;
});