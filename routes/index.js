const express = require('express');

// Router
const notesR = require('./notes');

const app = express();

app.use('/notes', notesR);

module.exports = app;