// Basic dependency imports for MERN stack app.

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const routes = require('./routes/api');

const PORT = process.env.PORT || 9000;

// Connects to my Mongoose DB.

// coachNick - iMagic99

const MONGODB_URI = 'mongodb+srv://coachNick:iMagic99@feedbackdb.wakmd.mongodb.net/SummerlinDB?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/summerlinDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.');
});

// Data Parsing.

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Save data to MongoDB.

// const data = {
//     address: '8350 W Charleston Blvd.',
//     gateCode: '2550',
//     map: 'https://imgur.com/gallery/c5488ep',
//     notes: ''
// }

// const newLocation = new Location(data);

// newLocation.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Data saved.');
//     }
// });

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}



// Morgan is an HTTP request logger. Lets you see requests in console.

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server started on port ${PORT}.`));