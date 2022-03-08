var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    title: 'Ingresar al Sistema',
    layout:false
  }

  res.render('login', data);
});

router.get('/home', controller.user_home);
router.post('/verify', controller.user_login_verify);
router.get('/logout', controller.user_logout);
router.post('/addUser', controller.user_register); 

router.get('/register', function(req, res, next){
  let data = {
      title: 'Registrar Usuario',
      layout:false
    }

  res.render('register', data);
});

module.exports = router;
