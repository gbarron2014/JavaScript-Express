var express = require('express');
var router = express.Router();
const controller = require('../controllers/scanController');
const estadisticasController = require('../controllers/estadisticasController');

/* GET home page. */
router.get('/', controller.index);
router.get('/estadisticas', estadisticasController.estadisticas);
router.get('/generate', controller.generate);
router.post('/query', controller.queryDates);
router.post('/code', controller.verifyCode);

module.exports = router;