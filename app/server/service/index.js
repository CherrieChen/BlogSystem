'use strict';

//const DAO = require('../DAO/index');

module.exports.home = function(callback) {
    //首页
    var json = {msg:'hello'};
    callback(null,JSON.stringify(json));
};