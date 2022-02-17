var User = require('../models/user');
const { body,validationResult } = require('express-validator');


//Mostrar formulario de Login
exports.user_login = function(req, res) {
    res.render('login', { title: 'Ingresando al sistema' });
};

//Dirige hacia la pantalla HOME
exports.user_home = function (req, res) {
    res.render('Bienvenido a Home');
};

//Verificar credenciales de usuario
exports.user_login_verify = function(req, res, next) {
    let username = req.body.username;
	let password = req.body.password;

    if (username && password) {
        console.log('Username ' + username);
        console.log('Password ' + password);

        User.find({'username': username, 'password':password}, function(err, results) {
            if (err) { return next(err); }

            if (results.length > 0) {
                console.log('Hubo resultados');
                res.render('index', { title: 'Bienvenido ' + username } );
            } else {
                res.render('login', {title: 'Ingresar al sistema', message:'Datos Incorrectos'});

            }
        });

    } else {
        res.send('por favor ingresa Usuario and Contraseña!');
		res.end();
    }
};
