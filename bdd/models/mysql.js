/**
 * Created by antoine on 09/03/17.
 */
'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test_st',
    database: 'nodejs_st'
});

connection.connect();

module.exports = connection;