const express = require('express');
const router = express.Router();

const flightController = require('../controllers/flightController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const flightSchemas = require('../models/joi/flightSchemas');

router.get('/:id', joiMiddleware.validate(flightSchemas.selectFlightSchema, 'params'), flightController.selectById);
router.get('/', joiMiddleware.validate(flightSchemas.updateFlightSchema, 'query'), flightController.selectAll);
router.post('/', joiMiddleware.validate(flightSchemas.createFlightSchema, 'body'), flightController.create);
router.put('/:id', joiMiddleware.validate(flightSchemas.selectFlightSchema, 'params'),
    joiMiddleware.validate(flightSchemas.updateFlightSchema, 'body'), flightController.update);
router.delete('/:id', joiMiddleware.validate(flightSchemas.selectFlightSchema, 'params'), flightController.delete);

module.exports = router;