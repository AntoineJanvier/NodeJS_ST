/**
* Created by antoine on 08/03/17.
*/
'use strict';

let Student = function (config) {
    this.nom = config.nom;
    this.prenom = config.prenom;
    this.age = config.age;
};
Student.prototype.toString = function () {
    return this.prenom + ' ' + this.nom + ' ' + this.age;
};

module.exports = Student;