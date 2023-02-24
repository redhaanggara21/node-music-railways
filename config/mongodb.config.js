const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'notes',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log('Connected to database'));

module.exports = mongoose;