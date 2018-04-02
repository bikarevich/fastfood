'use strict';
const express = require('express');
const app = express();
const routes = require('./endpoints/');

app.use('/', routes);

app.listen(8080, () => console.log('API listening on port 8080!'));

module.exports = app;
