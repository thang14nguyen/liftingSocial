require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const dbQuery = require('./database/controller/controller');

const app = express();

// Middleware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/user/:user_id', dbQuery.getUser);
app.get('/worldwide', dbQuery.getWorldwide);

module.exports = app;
