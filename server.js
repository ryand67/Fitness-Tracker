const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'))

require('./controller/api-routes')(app);
require('./controller/html-routes')(app);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/workout'

mongoose.connect(MONGODB_URI);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on ${PORT}`);
})