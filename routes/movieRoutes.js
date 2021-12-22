const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const joiMiddleware = require('./../middlewares/joiMiddleware');
const movieSchemas = require('./../models/joi/movieSchemas');

router.get('/details/:id', joiMiddleware.validate(movieSchemas.selectMovieSchema, 'params'), movieController.selectById);

module.exports = router;