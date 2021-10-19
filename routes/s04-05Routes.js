const express = require('express');
const router = express.Router();

const exercicisController = require('../controllers/s04-05Controller');

router.get('/ex1-1_milisegundos', exercicisController.milisegundos);
router.get('/ex1-2_fechaactual', exercicisController.fechaActual);
router.get('/ex1-3_horaactual', exercicisController.horaActual);



module.exports = router;