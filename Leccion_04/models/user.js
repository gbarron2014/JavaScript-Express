var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, minlength:8, maxlength:15,required:true},
    password: {type: String, required:true},
    email: {type:String}
});

module.exports = mongoose.model('User', UserSchema);