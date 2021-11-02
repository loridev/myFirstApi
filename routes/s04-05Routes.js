const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();

const exercicisController = require('../controllers/s04-05Controller');

//Ex1
router.get('/ex1-1_milisegundos', exercicisController.milisegundos);
router.get('/ex1-2_fechaactual', exercicisController.fechaActual);
router.get('/ex1-3_horaactual', exercicisController.horaActual);

//Ex2
router.get('/ex2_tablamult/:numero', exercicisController.tablaMult);

//Ex3
router.get('/ex3_factorial', exercicisController.factorial);

//Ex4
router.post('/ex4_calc', jsonParser, exercicisController.calc);

module.exports = router;