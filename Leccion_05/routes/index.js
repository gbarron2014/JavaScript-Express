var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
const authMiddleware = require('../middleware/authentication');

/* No es necesario verificar */
router.get('/', controller.user_login);
router.get('/formRegister', controller.register_show);
router.post('/addUser', controller.user_register);
router.post('/verify', controller.user_login_verify);

//Protege páginas 
router.get('/home', authMiddleware, controller.user_home);
router.get('/logout', authMiddleware, controller.user_logout);



module.exports = router;