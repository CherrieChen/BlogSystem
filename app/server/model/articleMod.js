var mongoose = require("./modCommon")
    Schema = mongoose.Schema;
var article = new Schema({
    title: { type: String, required: true},
    content:  { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},//作为外键
    author: { type: Schema.Types.ObjectId, ref: 'User' },//作为外键
    slug: { type: String, required: true },
    published: { type: Boolean, default: false },
    meta:{ type: Schema.Types.Mixed },
    comments: [ Schema.Types.Mixed ],
    created:{ type: Date , default: Date.now}
});
var Article = mongoose.model('article', article,'article');
module.exports =Article;

