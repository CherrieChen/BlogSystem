'use strict';
const User = require('../model/userMod');
/**
 * 根据用户名查找用户
 * @param loginName
 * @param callback
 */

module.exports.getUserByLoginName = function (loginName, callback) {
    User.findOne({'name': new RegExp('^'+loginName+'$', "i")}, callback);
};

/**
 * 根据用户ID，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} callback 回调函数
 */
module.exports.getUserById = function (id, callback) {
    if (!id) {
        return callback();
    }
    User.findOne({_id: id}, callback);
};

/**
 * 根据邮箱，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */


module.exports.getUserByMail = function (email, callback) {
    User.findOne({email: email}, callback);
};

/**
 *用户注册方法
 *
 * @param name
 * @param loginname
 * @param pass
 * @param email
 * @param callback
 */
module.exports.newAndSave = function (name, pass, email, avatar_url, active, callback) {
    var user         = new User();
    user.name        = loginname;
    user.password        = pass;
    user.email       = email;
    user.save(callback);
};