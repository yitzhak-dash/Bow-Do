const mongoose = require('mongoose');

const schemaOptions = {
    collection: "places"
};

const schema = new mongoose.Schema({
    loc: {
        type: {type: String},
        coordinates: [Number],
    },
    address: {
        city: String,
        zip: String,
        state: String,
        country: String,
        lines: [String],
    },
    placedIn: String,
    name: String,
    description: String,
    tags: [String],
    inserted:Date,
}, schemaOptions);

schema.index({"loc": "2dsphere"});
module.exports = mongoose.model('model', schema);



