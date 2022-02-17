var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {type: String, required: true, maxLength: 50, minlength:3},
    password: {type: String, required: true, maxLength: 100, minlength:8},
    email: {type: String},
  }
);

// URL Virtual
UserSchema
.virtual('url')
.get(function () {
  return '/catalog/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);
