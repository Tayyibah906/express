const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/controller');
require('./config/db_connection');
const comicRoutes = require('./routes/comicController');

app.use(cors());

app.use(bodyParser.json());

const dateLogger = function (request, response, next) {
    console.log(`Request received at ${new Date()}`);
    next();
};

app.use(dateLogger);

app.use('/', routes);

app.use('/comic', comicRoutes);

app.use(function (error, request, response, next) {
    response.status(500).send(error.stack);
});

const server = app.listen(4494, function () {
    console.log(`Server started successfully on port ${server.address().port}`)
});
