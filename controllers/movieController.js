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
    }
}