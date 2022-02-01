const mongoose = require('mongoose');
const flightModel = require('../models/db/flightModel');
const repository = require('../database/repository');

module.exports = {
    selectById: async (flightId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(flightId),
                model: flightModel,
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
            console.log('ERROR-flightService-selectById ' + err);
        }

        return response;
    },
    selectAll: async (queryParams) => {
        const response = { status: false };

        try {
            const data = {
                findQuery: queryParams,
                model: flightModel,
                projection: {
                }
            }

            const resFromRepo = await repository.selectAll(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-flightService-selectAll ' + err);
        }

        return response;
    },
    create: async (flightFromController) => {
        const response = { status: false };

        try {
            const flight = new flightModel(flightFromController);

            const resFromRepo = await repository.create(flight);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-flightService-create ' + err);
        }

        return response;
    },
    update: async (flight) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(flight.id),
                model: flightModel,
                projection: {
                    _id: true,
                },
                updateQuery: {},
            };

            if (flight.departure) {
                data.updateQuery.departure = flight.departure;
            }

            if (flight.destination) {
                data.updateQuery.destination = flight.destination;
            }

            if (flight.departureDateTime) {
                data.updateQuery.departureDateTime = flight.departureDateTime;
            }

            if (flight.arrivalDateTime) {
                data.updateQuery.arrivalDateTime = flight.arrivalDateTime;
            }

            if (flight.price) {
                data.updateQuery.price = flight.price;
            }

            if (flight.passenger) {
                data.updateQuery.passenger = flight.passenger;
            }

            const resFromRepo = await repository.update(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-flightService-update ' + err);
        }

        return response;
    },
    delete: async (flightId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(flightId),
                model: flightModel,
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
            console.log('ERROR-flightService-delete ' + err);
        }

        return response;
    },
}