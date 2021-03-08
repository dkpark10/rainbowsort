'use strict';
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const bodyparser = require('body-parser');

const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const port = 8080;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(compression());
app.use(helmet());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static('lib'));

app.get('/', (request, response) => {
  response.render("index", {});
});

app.use((request, response, next) => {
  response.status(404).send('Not Found');
})

app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send('Something broke');
})

app.listen(port, () => {
  console.log(`Waiting... ${port}`);
})  