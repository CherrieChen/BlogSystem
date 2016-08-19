'use strict';

const service = require('../service/indexSer');
const serviceUser = require('../service/userSer');
module.exports = function(router) {
    //首页
    router.get('/', function(req,res,next){
        service.home(function(err,data){
            res.send(data);
        });
    });
    router.get('/add', function(req,res,next){
        service.add(function(err){
            res.send('add suc');
        });
    });
    router.get("/useradd",function(req,res,next){
        serviceUser.add(function(err,data){
            res.send(data);
        });
    })

};