const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'))

const db = require('./models/index');

mongoose.connect(process.env.MONOGODB_URI || 'mongodb://localhost/workoutdb', {useNewUrlParser: true})

app.get('/', (req, res) => {
    
})

app.get('/exercise', (req, res) => {
    res.sendFile(__dirname + '/public/exercise.html', (err) => {
        if(err) throw err;
    })
})

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on ${PORT}`);
})