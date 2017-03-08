/**
 * Created by antoine on 08/03/17.
 */
const express = require('express');
const fs = require('fs');
const middlewares = require('./middleware');
let app = express();

let count = 1;

app.use(middlewares.tracker());

// app.use(function (req, res, next) {
//     let address = req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
//
//     address = address.substr(address.lastIndexOf(':') + 1);
//
//     if(address != "127.0.0.1" && req.originalUrl != "/favicon.ico") {
//         console.log(address);
//         let json = '' + count + ' : {\n\t"url": "' + req.originalUrl +
//             '",\n\t"ip": "'+ address +
//             '",\n\t"method": "'+ req.method +
//             '",\n},\n';
//         fs.readFile('requests.json', function (err, data) {
//             if(err)
//                 throw err;
//             fs.writeFile('requests.json', data + json, function (err2) {
//                 if(err2)
//                     throw err2;
//             })
//         });
//         count++;
//     }
//     next();
// });
app.all('*', function (req, res) {
    res.type('text');
    res.send('OK');
});
app.listen(8888, function () {
    console.log('Started at : ' + 8888);
});