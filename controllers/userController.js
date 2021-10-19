const users = [{name: 'john'}, {name: 'david'}, {name: 'maria'}];
const status = {
    success: 200,
}

module.exports = {
    list: (req, res) => {
        //PETICIO BBDD
        res.status(status.success).send(users);
    }
}