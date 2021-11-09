const c = require('./../config/constants');

module.exports = {
    checkNumEx01: (req, res, next) => {
        req.params.num = Number(req.params.num);

        if (!Number.isNaN(req.params.num) && req.params.num >= 1) {
            next();
        } else {
            res.status(c.status.badRequest).send({error: "You must enter a number greater than 1!"});
        }
    },

    checkNumEx02: (req, res, next) => {
        if (req.body.cajafuerte !== 'mi-caja-fuerte') {
            res.status(c.status.badRequest).send({error: 'String not detected.'});
        } else {
            req.body.mult = Number(req.body.mult);
            if (Number.isNaN(req.body.mult)) {
                res.status(c.status.badRequest).send({error: 'You must introduce a number.'});
            } else {
                next();
            }
        }
    }
};