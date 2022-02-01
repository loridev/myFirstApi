const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    selectFlightSchema: Joi.object({
        id: Joi.objectId().required(),
    }),
    createFlightSchema: Joi.object({
        departure: Joi.string().regex(/^[a-zA-Z\s]*$/).max(10).required(),
        destination: Joi.string().regex(/^[a-zA-Z\s]*$/).max(10).required(),
        departureDateTime: Joi.date().required(),
        arrivalDateTime: Joi.date().required(),
        price: Joi.number().precision(2).required(),
        passenger: Joi.string().regex(/^[a-zA-Z\s]*$/).max(300),
    }),
    updateFlightSchema: Joi.object({
        departure: Joi.string().regex(/^[a-zA-Z\s]*$/).max(10).optional(),
        destination: Joi.string().regex(/^[a-zA-Z\s]*$/).max(10).optional(),
        departureDateTime: Joi.date().optional(),
        arrivalDateTime: Joi.date().optional(),
        price: Joi.number().precision(2).optional(),
        passenger: Joi.string().regex(/^[a-zA-Z\s]*$/).max(300),
    }),
}