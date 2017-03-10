/**
* Created by Antoine Janvier on 09/03/17.
*/
'use strict';

const express = require('express');
const models = require('./models');
const mysql = require('mysql');

let app = express();

let routes = require('./routes');
routes(app);

let port = 8080;
app.listen(port, function () {
    console.log('Server started at ' + port + '...');
});
