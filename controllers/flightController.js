const c = require('../config/constants');
const flightService = require('../services/flightService');

module.exports = {
    selectById: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const flightId = req.params.id;
            const serviceResponse = await flightService.selectById(flightId);

            if (serviceResponse.status) {
                if (serviceResponse.result) {
                    response.status = c.status.success;
                    response.msg = 'flight found';
                    response.body = serviceResponse.result;

                } else {
                    response.status = c.status.notFound;
                    response.msg = 'flight not found';
                }
            }
        } catch (err) {
            console.log('ERROR-flightController-selectById: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    selectAll: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const queryparams = req.query || {};
            console.log(queryparams);
            const serviceResponse = await flightService.selectAll(queryparams);

            if (serviceResponse.status) {
                if (serviceResponse.result) {
                    response.status = c.status.success;
                    response.msg = 'Flights found';
                    response.body = serviceResponse.result;

                } else {
                    response.status = c.status.notFound;
                    response.msg = 'No flights found';
                }
            }


        } catch (err) {
            console.log('ERROR-flightController-selectAll: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    create: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const flight = req.body;
            flight.active = true;
            const serviceResponse = await flightService.create(flight);

            if (serviceResponse.status) {
                response.status = c.status.created;
                response.msg = 'flight created';
                response.body = serviceResponse.result;
            }


        } catch (err) {
            console.log('ERROR-flightController-create: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    update: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const flight = req.body;
            flight.id = req.params.id;
            const serviceResponse = await flightService.update(flight);

            if (serviceResponse.status) {
                response.status = c.status.success;
                response.msg = 'Flight updated';
                response.body = serviceResponse.result;
            }


        } catch (err) {
            console.log('ERROR-flightController-update: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    delete: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            console.log(req.params.id);
            const flightId = req.params.id;
            const serviceResponse = await flightService.delete(flightId);

            if (serviceResponse.status) {
                if (serviceResponse.result) {
                    response.status = c.status.success;
                    response.msg = 'Flight deleted';
                    response.body = serviceResponse.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = 'Flight not found';
                }
            }


        } catch (err) {
            console.log('ERROR-flightController-delete: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
}