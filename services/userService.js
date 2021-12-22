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
    }
}