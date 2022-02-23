var User = require('../models/user');
const { body, validationResult } = require('express-validator');

exports.user_login = function(req, res) {
    res.render('login', {title: 'Ingresando al sistema'});
}

exports.user_home = (req, res) => {
    res.render('home', {title: 'Bienvenido a Casa'});
};

exports.user_verify = (req, res) => {
    let usuario = req.body.username;
    let pass = req.body.password;
    console.log('Usuario ' + usuario + ' Password: ' + pass);

    if (usuario && pass) {
        User.find({'username': usuario, 'password': pass}, function(error, results) {
            if (error){
                let message = 'Hubo un error de conexion a Mongo';
                res.render('login', {title:'Ingresar Sistema', message:message});
            }

            if (results.length > 0) {
                res.render('index', {title:'Bienvenido ' + usuario});
            } else {
                let mensaje = 'Usuario o contraseña incorrecto';
                let titulo = 'Bienvenido ' + usuario;
                res.render('login', {title:titulo, message: mensaje });

            }
        });
    } else {
        let message = 'Usuario o Contraseña vacío';
        res.render('login', {title:'Ingresar Sistema', message: message});
    }
  
};