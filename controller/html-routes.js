const db = require('../models/index');
const path = require('path');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
            if(err) return res.status(500).json(err);
        })
    })

    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'), (err) => {
            if(err) return res.status(500).json(err);
        })
    })

    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'), (err) => {
            if(err) return res.status(500).json(err);
        })
    })
}