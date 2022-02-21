var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Ruta para mostrar forma Login
router.get('/login', userController.user_login); 

//Ruta para verificar Login
router.post('/login/verify', userController.user_login_verify);


module.exports = router;
