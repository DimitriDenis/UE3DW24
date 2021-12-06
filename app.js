const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter').router;

app.use('/api/', apiRouter);

module.exports = app;