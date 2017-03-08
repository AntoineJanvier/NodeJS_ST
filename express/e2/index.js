/**
* Created by antoine on 08/03/17.
*/
'use strict';

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes')(app);

app.all('*', function (req, res) {
    console.log('404');
    res.status(404);
    res.type('text');
    res.send('-> NO WAY!');
});
let port = 1651;
app.listen(port, function () {
    console.log('Server started on port ' + port + '...');
});

