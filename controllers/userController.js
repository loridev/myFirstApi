const users = [{name: 'john'}, {name: 'david'}, {name: 'maria'}];
const status = {
    success: 200,
};

module.exports = {
    list: (req, res) => {
        console.log(req.query.orden); //ACCEDER QUERY PARAMS
        //PETICIO BBDD
        res.status(status.success).send(users);
    }
};