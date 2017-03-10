/**
* Created by antoine on 09/03/17.
*/
'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_st',
    database: 'nodejs_st'
});

connection.connect();
connection.query("SELECT * FROM Computer;", function (err, rows, fields) {
    if(err)
        throw err;
    if(rows.length) {
        console.log('First user : ', rows[0]);
    } else {
        console.log('No user');
    }
});
connection.end();