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
    },
    create: async (movieFromController) => {
        const response = { status: false };

        try {
            const movie = new movieModel(movieFromController);

            const resFromRepo = await repository.create(movie);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-movieService-create ' + err);
        }

        return response;
    },
    update: async (movie) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(movie.id),
                model: movieModel,
                projection: {
                    _id: true,
                },
                updateQuery: {},
            };

            if (movie.title) {
                data.updateQuery.title = movie.title;
            }

            if (movie.sinopsis) {
                data.updateQuery.sinopsis = movie.sinopsis;
            }

            if (movie.director) {
                data.updateQuery.director = movie.director;
            }

            if (movie.releasedDate) {
                data.updateQuery.releasedDate = movie.releasedDate;
            }

            if (movie.actors) {
                data.updateQuery.actors = movie.actors;
            }

            const resFromRepo = await repository.update(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-movieService-update ' + err);
        }

        return response;
    },
    delete: async (movieId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(movieId),
                model: movieModel,
                projection: {
                    _id: false,
                },
                updateQuery: {},
            };

            const resFromRepo = await repository.delete(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-movieService-delete ' + err);
        }

        return response;
    },
}