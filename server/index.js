const express = require('express');
const path = require('path');
const router = require('./routes.js');
const dotenv = require('dotenv')

const db = require('../database/index.js')
const app = express();
const port = process.env.PORT || 3000

// app.use('/', router);

app.get('/*', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {;
console.log(`Listening at http://localhost:${port}`)})