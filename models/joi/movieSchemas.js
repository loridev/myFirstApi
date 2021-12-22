const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    selectMovieSchema: Joi.object({
        id: Joi.objectId().required(),
    }),
}