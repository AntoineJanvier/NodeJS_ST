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
var f = test;
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