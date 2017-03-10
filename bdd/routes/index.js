/**
 * Created by antoine on 09/03/17.
 */
'use strict';

module.exports = function (app) {
    app.use('/computer', require('./computer'));
};