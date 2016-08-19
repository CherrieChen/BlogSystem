'use strict';
const Article = require('../model/articleMod');
var mongoose = require('mongoose');
module.exports.home = function(callback) {
        Article.find({}, function (err,datas) {
        if(err){
            console.log(err)
        }
        console.log(datas);
        callback(err,datas);
    })

};
module.exports.add = function() {
    //添加文章

    var article = new Article(
        {"title":'XXX1',
        "content":'XXX1',
        "category":new mongoose.Types.ObjectId,
        "author":new mongoose.Types.ObjectId,
        "slug":'XXX1',
        "published":true,
        "meta":'XXX1',
        "comments":[],
            created:new Date()
    });
    article.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });
};