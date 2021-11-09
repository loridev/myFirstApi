const c = require('./../config/constants');

module.exports = {
    randomNum: (req, res) => {
        res.status(c.status.success).send({Number: Math.random() * (req.params.num - 1) + 1});
    },

    multList: (req, res) => {
        const arrayInicial = [2,4,8,9,7,3,5,6];
        const result = [];

        arrayInicial.forEach((num) => {
            result.push(num * req.body.mult);
        });

        res.status(c.status.success).send({Result: result});
    }

};