var mongoose = require("./modCommon")
    Schema = mongoose.Schema;
var user = new Schema({
    name: { type: String, required: true,index: true},
    password:  { type: String, required: true},
    email:{type:String,required:true},
    created:{type: Date, default: Date.now }
});
var User = mongoose.model('user', user,'users');
module.exports =User;

