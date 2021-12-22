const c = require('./../config/constants');
const userService = require('./../services/userService');
const users = [{id: 1, name: 'john'}, {id: 2, name: 'david'}, {id: 3, name: 'maria'}];
const status = {
    success: 200,
    notFound: 404,
};

module.exports = {
    list: (req, res) => {

         //ACCEDER QUERY PARAMS
        //PETICIO BBDD
        res.status(status.success).send(users);
    },
    profile: (req, res) => {
        //PETICIO BBDD

        const user = users.find((user) => user.id == req.params.userId);

        if (user) {
            const user = users.find((user) => user.id == req.params.userId);
        } else {
            res.status(status.notFound).send({error: 'User not found'});
        }
        console.log(req.params);

        res.status(status.success).send(user);
    },
    create: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user);

        res.status(c.status.created).send(user);
    },
    selectById: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const userId = req.params.id;
            const serviceResponse = await userService.selectById(userId);

            if (serviceResponse.status) {
                if (serviceResponse.result) {
                    response.status = c.status.success;
                    response.msg = 'User found';
                    response.body = serviceResponse.result;

                } else {
                    response.status = c.status.notFound;
                    response.msg = 'User not found';
                }
            }


        } catch (err) {
            console.log('ERROR-userController-selectById: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    },
    selectAll: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };

        try {
            const queryparams = req.query || {};
            console.log(queryparams);
            const serviceResponse = await userService.selectAll(queryparams);

            if (serviceResponse.status) {
                if (serviceResponse.result) {
                    response.status = c.status.success;
                    response.msg = 'Users found';
                    response.body = serviceResponse.result;

                } else {
                    response.status = c.status.notFound;
                    response.msg = 'No users found';
                }
            }


        } catch (err) {
            console.log('ERROR-userController-selectAll: ' + err);
            response.error = err;
        }

        res.status(response.status).send(response);
    }
};