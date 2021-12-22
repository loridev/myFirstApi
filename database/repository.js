const userController = require("../controllers/userController");

module.exports = {
    selectById: async (data) => {
        let response = { status: false }

        try {
            const doc = await data.model.findById(data._id, data.projection);

            response = {
                status: true,
                result: doc,
            };
        } catch (err) {
            console.log('ERROR-repository-selectById ' + err);
        }

        return response;
    }
}