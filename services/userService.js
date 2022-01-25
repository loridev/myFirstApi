const mongoose = require('mongoose');
const userModel = require('./../models/db/userModel');
const repository = require('./../database/repository');

module.exports = {
    selectById: async (userId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(userId),
                model: userModel,
                projection: {
                    _id: false,
                }
            }

            const resFromRepo = await repository.selectById(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-userService-selectById ' + err);
        }

        return response;
    },
    selectAll: async (queryParams) => {
        const response = { status: false };

        try {
            const data = {
                findQuery: queryParams,
                model: userModel,
                projection: {
                }
            }

            const resFromRepo = await repository.selectAll(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-userService-selectAll ' + err);
        }

        return response;
    },
    create: async (userFromController) => {
        const response = { status: false };

        try {
            const user = new userModel(userFromController);

            const resFromRepo = await repository.create(user);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-userService-create ' + err);
        }

        return response;
    },
    update: async (user) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(user.id),
                model: userModel,
                projection: {
                    _id: false,
                },
                updateQuery: {},
            };

            if (user.mail) {
                data.updateQuery.mail = user.mail;
            }
            
            if (typeof user.active !== 'undefined') {
                data.updateQuery.active = user.active;
            }

            const resFromRepo = await repository.update(data);

            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('ERROR-userService-update ' + err);
        }

        return response;
    },
    delete: async (userId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(userId),
                model: userModel,
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
            console.log('ERROR-userService-delete ' + err);
        }

        return response;
    },

}