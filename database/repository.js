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
    },
    selectAll: async (data) => {
        let response = { status: false };

        try {
            const doc = await data.model.find(data.findQuery, data.projection);

            response = {
                status: true,
                result: doc,
            };
        } catch (err) {
            console.log('ERROR-repository-selectAll ' + err);
        }

        return response;
    },
    create: async (obj) => {
        let response = { status: false };

        try {
            const doc = await obj.save();

            response = {
                status: true,
                result: doc,
            };
        } catch (err) {
            console.log('ERROR-repository-create ' + err);
        }

        return response;
    },
    update: async (data) => {
        let response = { status: false };
        try {
            const doc = await data.model.findOneAndUpdate({_id: data._id}, data.updateQuery, {projection: data.projection, new: true});
            response = {
                status: true,
                result: doc,
            };
        } catch (err) {
            console.log('ERROR-repository-update ' + err);
        }

        return response;
    },
    delete: async (data) => {
        let response = { status: false };
        try {
            const doc = await data.model.findOneAndDelete({_id: data._id}, {projection: data.projection});
            response = {
                status: true,
                result: doc,
            };
        } catch (err) {
            console.log('ERROR-repository-delete ' + err);
        }

        return response;
    },
}