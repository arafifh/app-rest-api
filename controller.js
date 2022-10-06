'use strict';

var response = require('./res');
var connect = require('./connection');

exports.index = function(req, res) {
    response.ok("app REST API working!")
};