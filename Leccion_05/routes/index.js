const { Router } = require('express');
var express = require('express');
const { cookie } = require('express/lib/response');
var router = express.Router();
var userController = require('../controllers/userController');

/* Obtener pantalla  */
router.get('/', userController.user_login);
router.get('/home', userController.user_home);
router.post('/verify', userController.user_verify);

//Ruta de prueba de Cookie
router.get('/cookie',(req, res) => {
    console.log('Cookies: ', req.cookies);
    console.log('Signed Cookies: ', req.signedCookies);

    for (cookie in req.cookies) {
        console.log("Galleta = " + cookie);

    }
    

    res.cookie('color' , 'Mi color favorito es Azul', { maxAge: 900000, httpOnly: true, signed:true});
    res.send('Cookie is set');
    
});
module.exports = router;
