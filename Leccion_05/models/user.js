const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: { type: String, minlength: 8, maxlength: 15, required: true },
    password: { type: String, required: true },
    email: { type: String }
});

UserSchema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    });
});

module.exports = mongoose.model('User', UserSchema);