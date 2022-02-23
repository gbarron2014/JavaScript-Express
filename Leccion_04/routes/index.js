const { Router } = require('express');
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* Obtener pantalla  */
router.get('/', userController.user_login);
router.get('/home', userController.user_home);
router.post('/verify', userController.user_verify);


module.exports = router;
