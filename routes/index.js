// written an index.js file as whilst only notes on api route for now this leaves room for further work on this app
// that will allow for modularization in future if further api routes are added making future work easier to maintain

const express = require('express');

const notes = require('./notes');

const app = express();

app.use('/notes', notes);

module.exports = app;
