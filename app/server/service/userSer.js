'use strict';
const User = require('../model/userMod');
module.exports.find = function(callback) {
    User.find({}, function (err,datas) {
        if(err){
            console.log(err)
        }
        console.log(datas);
        callback(err,datas);
    })
};
module.exports.add = function(callback) {
    var user = new User();
    user.name='ygy';
    user.password = '123456';
    user.email = '982883422@qq.com';
    user.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('suc');
        }
        callback(err,'suc');
    });
};