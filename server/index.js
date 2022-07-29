const express = require('express');
const path = require('path');
const router = require('./router.js');

const db = require('../database/index.js')
const app = express();

app.use('/', router);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);