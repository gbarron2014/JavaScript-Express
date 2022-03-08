var User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


exports.user_login = function(req, res) {
    let data = {
        title: 'Ingresar al Sistema',
        layout: false
    }

    res.render('login', data);
};

exports.register_show = function(req, res) {
    let data = {
        title: 'Registrar Usuario al Sistema',
        layout: false
    }

    res.render('register', data);
};

exports.user_register = [
    body('username', 'Usuario es requerido').trim().isLength({ min: 8, max: 15 }).escape(),
    body('email', 'Email es requerido').trim().isEmail().escape(),
    body('password', 'Contraseña es requerida').trim().isLength({ min: 8, max: 15 }).escape(),

    (req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let data = {
                title: 'Registro de Usuario',
                messages: errors.array()
            };
            res.render('register', data);
            return;
        } else {
            console.log('Registrando Usuario');
            let user = new User({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            });

            user.save(function(error) {
                if (error) { return next(error); }

                let data = { title: 'Ingresar Sistema', message: 'Bienvenido ' + req.body.username }
                res.render('index', data);
            });
        }
    }
];


exports.user_home = function(req, res) {
    res.send('Despliega pantalla de bienvenida');
};

exports.user_login_verify = function(req, res) {
    let usuario = req.body.username;
    let pass = req.body.password;

    console.log('Usuario: ' + usuario + " Pass: " + pass);

    if (usuario && pass) {

        User.findOne({ username: usuario }, (error, user) => {
            if (user) {
                bcrypt.compare(pass, user.password, (error, same) => {
                    if (same) { //Coinciden
                        //Almacena datos a sesión
                        req.session.usuario = usuario;
                        res.render('index', { title: 'Bienvenido' });

                    } else {
                        let data = {
                            title: 'Ingresar al Sistema',
                            message: 'Usuario o contraseña incorrecto',
                            layout: false
                        }
                        res.render('login', data);
                    }
                })
            } else {
                let data = {
                    title: 'Ingresar al Sistema',
                    message: 'Usuario No Existe',
                    layout: false
                }
                res.render('login', data);
            }
        })

    } else {
        let data = {
            title: 'Ingresar al Sistema',
            message: 'Usuario o Contraseña Incorrecto',
            layout: false
        }
        res.render('/', data);
    }
};

exports.user_logout = function(req, res) {
    req.session.destroy();

    let data = {
        title: 'Ingresar al Sistema',
        layout: false
    }
    res.render('login', data);

};