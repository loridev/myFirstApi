module.exports.helloWorld = (req, res) => {
    const jsonResponse = {msg: 'Hello world!'}
    const status = 200;
    res.status(status).send(jsonResponse);
}