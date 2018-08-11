'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./endpoints/');

app.use(cors());
app.use(require('body-parser').json());

app.use('/', routes);

app.listen(8080, () => console.log('API listening on port 8080!'));

module.exports = app;
