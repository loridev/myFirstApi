const express = require('express');
require('dotenv');
const app = express();

const myFirstController = require('./controllers/myFirstController');
// REQUEST, RESPONSE
app.get('/holamundo', myFirstController.helloWorld);

app.listen(process.env.PORT || 3000, () => {
    console.log("My first API running!");
});