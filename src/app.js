const { json } = require('express');
const express = require('express')
const routes = require('./routes')
require('dotenv').config()


const app = express();

app.use(json())
app.use(routes)

module.exports = app

