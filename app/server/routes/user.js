'use strict';
const serviceUser = require('../service/userSer');
module.exports = function(router) {

    router.post("/login",function(req,res,next){

        var name, password;
        if(req.body.name){
             name= req.body.name;
        }
        if(req.body.password){
            password= req.body.password
        }
        serviceUser.getUserByLoginName(name,function(err,data){
            /**
             * 用户不存在
             */
            if(data==null){
                res.redirect("../../../public/html/login.html");
                return false;
            }
            /**
             * 密码正确跳转 到文章列表
             */
            if(data.password==password){
                res.redirect("../../../public/html/article_list.html");
                return true;
            }
            /**
             * 密码错误
             */
            else {
                res.redirect("../../../public/html/login.html");
                return false;
            }

            res.send(data);
        });
    })

};