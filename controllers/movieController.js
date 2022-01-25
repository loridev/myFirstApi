const c = require('./../config/constants');
const movieService = require('./../services/movieService');

module.exports = {
    selectById: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const movieId = req.params.id;
            const serviceResponse = await movieService.selectById(movieId);

            if (serviceResponse.status) {
                if (serviceResponse.result) {
                    response.status = c.status.success;
                    response.msg = 'Movie found';
                    response.body = serviceResponse.result;

                } else {
                    response.status = c.status.notFound;
                    response.msg = 'Movie not found';
                }
            }
        } catch (err) {
            console.log('ERROR-movieController-selectById: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    create: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const movie = req.body;
            movie.active = true;
            const serviceResponse = await movieService.create(movie);

            if (serviceResponse.status) {
                response.status = c.status.created;
                response.msg = 'Movie created';
                response.body = serviceResponse.result;
            }


        } catch (err) {
            console.log('ERROR-movieController-create: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    update: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const movie = req.body;
            movie.id = req.params.id;
            const serviceResponse = await movieService.update(movie);

            if (serviceResponse.status) {
                response.status = c.status.success;
                response.msg = 'Film updated';
                response.body = serviceResponse.result;
            }


        } catch (err) {
            console.log('ERROR-movieController-update: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    delete: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            console.log(req.params.id);
            const movieId = req.params.id;
            const serviceResponse = await movieService.delete(movieId);

            if (serviceResponse.status) {
                response.status = c.status.success;
                response.msg = 'Film deleted';
                response.body = serviceResponse.result;
            }


        } catch (err) {
            console.log('ERROR-movieController-delete: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
}