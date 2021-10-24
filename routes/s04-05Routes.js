const express = require('express');
const router = express.Router();

const exercicisController = require('../controllers/s04-05Controller');

//Ex1
router.get('/ex1-1_milisegundos', exercicisController.milisegundos);
router.get('/ex1-2_fechaactual', exercicisController.fechaActual);
router.get('/ex1-3_horaactual', exercicisController.horaActual);

//Ex2
router.get('/ex2_tablamult/:numero', exercicisController.tablaMult);

module.exports = router;