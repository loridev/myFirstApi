const express = require('express');
require('dotenv');
const app = express();
const appAlumnes = express();

const myFirstController = require('./controllers/myFirstController');

// REQUEST, RESPONSE
app.get('/holamundo', myFirstController.helloWorld);

appAlumnes.get('/alumnes', myFirstController.alumnes);

app.use('/api/v1/user', require('./routes/userRoutes'));

app.use('/api/v1/s04-s05', require('./routes/s04-05Routes'));

app.use('/api/v1/s06', require('./routes/s06Routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log("My first API running!");
});
