const express = require('express');
require('dotenv').config();
const app = express();
const appAlumnes = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const myFirstController = require('./controllers/myFirstController');

// REQUEST, RESPONSE
app.get('/holamundo', myFirstController.helloWorld);

appAlumnes.get('/alumnes', myFirstController.alumnes);

app.use('/api/v1/user', require('./routes/userRoutes'));

app.use('/api/v1/s04-s05', require('./routes/s04-05Routes'));

app.use('/api/v1/s06', require('./routes/s06Routes'));

app.use('/api/v1/s07', require('./routes/S07Routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`My first API running on port ${process.env.PORT}`);
});
