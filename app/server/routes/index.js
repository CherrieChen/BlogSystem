'use strict';

const service = require('../service/index');

module.exports = function(router) {
    //首页
    router.get('/', function(req,res,next){
        service.home(function(err,data){
            res.send(data);
        });
    });

};