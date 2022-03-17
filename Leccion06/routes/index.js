var express = require('express');
var router = express.Router();
const controller = require('../controllers/scanController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/code', controller.verifyCode);

module.exports = router;