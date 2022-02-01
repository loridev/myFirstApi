const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const joiMiddleware = require('./../middlewares/joiMiddleware');
const movieSchemas = require('./../models/joi/movieSchemas');

router.get('/details/:id', joiMiddleware.validate(movieSchemas.selectFlightSchema, 'params'), movieController.selectById);
router.post('/', joiMiddleware.validate(movieSchemas.createMovieSchema, 'body'), movieController.create);
router.put('/:id', joiMiddleware.validate(movieSchemas.selectFlightSchema, 'params'),
    joiMiddleware.validate(movieSchemas.updateFlightSchema, 'body'), movieController.update);
router.delete('/:id', joiMiddleware.validate(movieSchemas.selectFlightSchema, 'params'), movieController.delete);

module.exports = router;