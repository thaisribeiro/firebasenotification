const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('../routes/index');
const sendMessage = require('../routes/sendMessage');
app.use('/', index);
app.use('/sendMessage', sendMessage);
module.exports = app;