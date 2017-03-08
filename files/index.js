/**
 * Created by antoine on 08/03/17.
 */
'use strict';

const fs = require('fs');

let toWrite;

// fs.writeFile('bonjour.txt', 'Hello', function (err) {
//     if(err)
//         throw err;
//     console.log("OK");
// });
//
// fs.readFile('bonjour.txt', function (err, data) {
//     if(err)
//         throw err;
//     console.log("Res : " + data);
// });

fs.readFile('bonjour.txt', function (err, data) {
    if(err)
        throw err;
    fs.writeFile('bonjour.txt', data + 'ABC', function (err2) {
        if(err2)
            throw err2;
    })
});
console.log('Completed');