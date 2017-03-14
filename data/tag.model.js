const mongoose = require('mongoose');

const schemaOptions = {
    collection: "tags"
};

const schema = new mongoose.Schema({
    tagName: {type: String, index: true, required: true, unique: true},
    color: {type: String, default: '#ffffff'}
}, schemaOptions);

module.exports = mongoose.model('tag', schema);



