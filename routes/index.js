var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', userController.user_home);

module.exports = router;
