const c = require('./../config/constants');

module.exports = {
    checkId: (req, res, next) => {
        req.body.id = Number(req.body.id);
        if (!Number.isNaN(req.body.id)) {
            req.body.id = Math.floor(req.body.id);
            next();
        } else {
            res.status(c.status.badRequest).send({Error: "Id must be numeric"});
        }
    }
}