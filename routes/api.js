const express = require('express');
const router = express.Router();

const Location = require('../models/location');

// Basic get route(s) to model data.

router.get('/', (req, res) => {

    Location.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((err) => {
            console.log('err: ', err);
        });
});

router.get('/avondale', (req, res) => {
    const data = {
        address: '9225 W Charleston Blvd.',
        gateCode: '#2044',
        map: 'https://imgur.com/gallery/jiMFyc3',
        notes: ''
    };
    res.json(data);
});

router.post('/save', (req, res) => {
    // console.log("Body: ", req.body);
    // res.json({
    //     message: "Data received."
    // });

    const data = req.body;

    const newLocation = new Location(data);

    newLocation.save((err) => {
        if (err) {
            res.status(500).json({
                message: 'Internal server error.'
            });
            return;
        }
        return res.json({
            message: 'Data saved.'
        });
    });
});

module.exports = router;