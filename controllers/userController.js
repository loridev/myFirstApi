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
    }
};