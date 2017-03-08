/**
 * Created by antoine on 08/03/17.
 */
'use strict';

const fs = require('fs');
let f = 'req.json';

module.exports = function () {

    return function (req, res, next) {
        trackRequest(req.path, req.method, next);
    }
};

function trackRequest(path, method, callback) {
    fs.stat(f, function (err, stat) {
        if(err) {
            // NOT FOUND
            saveTracker([], path, method, callback);
        } else {
            // EXISTS
            fs.readFile(f, function (err, data) {
                if(err) {
                    return callback(err);
                }
                saveTracker(JSON.parse(data), path, method, callback);
            })
        }
    })
}

function saveTracker(content, path, method, callback) {
    let found = false;
    for(let log in content) {
        if(log.path == path && log.method == method) {
            log.count++;
            found = true;
            break;
        }
    }
    if(!found) {
        content.push({
            path: path,
            method: method,
            count: 1
        });
    }
    fs.writeFile(f, JSON.stringify(content), callback);
}