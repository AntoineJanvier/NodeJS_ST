/**
 * Created by antoine on 07/03/17.
 */
'use strict';

module.exports = function (app) {
    require('./cookie')(app);
    require('./example')(app);
    require('./car')(app);
};