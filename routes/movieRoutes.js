const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const joiMiddleware = require('./../middlewares/joiMiddleware');
const movieSchemas = require('./../models/joi/movieSchemas');

router.get('/details/:id', joiMiddleware.validate(movieSchemas.selectMovieSchema, 'params'), movieController.selectById);
router.post('/', joiMiddleware.validate(movieSchemas.createMovieSchema, 'body'), movieController.create);
router.put('/:id', joiMiddleware.validate(movieSchemas.selectMovieSchema, 'params'),
    joiMiddleware.validate(movieSchemas.updateMovieSchema, 'body'), movieController.update);
router.delete('/:id', joiMiddleware.validate(movieSchemas.selectMovieSchema, 'params'), movieController.delete);

module.exports = router;