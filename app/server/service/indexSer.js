'use strict';

var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost:27017/blog_system");

//const DAO = require('../DAO/index');
const Article = require('../model/articleMod');
module.exports.home = function(callback) {
    //首页
    var json = {msg:'hello'}
    //new Article({"title":'XXX1',
    //    "content":'XXX1',
    //    "category":'XXX1',
    //    "author":'XXX1',
    //    "slug":'XXX1',
    //    "published":'XXX1',
    //    "meta":'XXX1',
    //    "comments":'XXX1'
    //});
    Article.find({},function(datas){
        console.log(datas);
        callback(null,JSON.stringify(json));
    });

};