var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        username: { 
            type:String,
            trim:true,
            lowercase:true,
            required: 'El Usuario es requerido',
            minlength:8,
            maxlength:20},
        password: {
            type:String,
            trim:true,
            lowercase:true,
            required:'Contraseña es requerida',
            minlength:8,
            maxlength:15},
        email:{
            type:String,
            trim:true,
            required:'El Email es requerido'
        }
    }
);

UserSchema.virtual('url')
.get(function(){
    return '/catalog/user/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);