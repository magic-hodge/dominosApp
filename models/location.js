const mongoose = require('mongoose');

// Location schema & model.

const Schema = mongoose.Schema;
const locationSchema = new Schema ({
    address: String,
    gateCode: String,
    siteMap: String,
    notes: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;