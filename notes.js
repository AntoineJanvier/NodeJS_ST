/**
* Created by Antoine Janvier
* on 06/03/17.
*/

/**
 * Cours 1 : Rappel sur le JS
 */
/**
 * On peut mettre n'importe quoi dans les variables
 */
function test() {
    console.log("Hello");
}
let f = test;
f(); // Hello
//-----------
function exec(f) {
    f();
}
exec(function () {
    console.log("Hello ");
});
exec(function () {
    console.log("ESGI");
});
// Affiche Hello ESGI
/**
 * Objects
 */
let myObject = {
    x : 0,
    y : 0,
    add : function() {
        return this.x + this.y;
    }
};
let Person_noob = function() {
    let firstname = "Antoine"; // détruit à la fin
    this.lastname = "Janvier"; // sauvegardé
};
myObject.x = 10;
myObject.y = 50;
console.log(myObject.add());
let Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Ne pas faire : (parce que p1.display == p2.display affiche false
    this.display_noob = function () {
        console.log(this.firstname + ' ' + this.lastname);
    };
};
Person.prototype.display = function () {
    console.log(this.firstname + ' ' + this.lastname);
};
let p = new Person("Antoine", "Janvier");
p.display();

// Bidouille sur les constructeurs pour faire un héritage propre
// Depuis JS6, mot clé extends
let fextends = function (Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
};
let Employee = function () {
    Person.apply(this, arguments);
};
fextends(Employee, Person);
let e = new Employee("Toto", "Titi");
e.display();

