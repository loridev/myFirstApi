const mongoose = require('mongoose');
const movieModel = require('./../models/db/movieModel');
const repository = require('./../database/repository');

module.exports = {
    selectById: async (movieId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(movieId),
                model: movieModel,
                projection: {
                    __v: false,
                }
            }

            const resFromRepo = await repository.selectById(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-movieService-selectById ' + err);
        }

        return response;
    }
}