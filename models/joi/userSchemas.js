const Joi = require('@hapi/joi');

module.exports = {
    createUserSchema: Joi.object({
        name: Joi.string().regex(/^[A-Za-z]+$/).max(20).min(3).required(),
        job: Joi.string().alphanum().max(50).min(5).required(),
        birthday: Joi.date().iso().min('1/1/2000').required(),
        username: Joi.string().alphanum().max(20).min(3),
        mail: Joi.string().email().max(30).min(5),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    }),
}