const MongoClient = require("mongodb").MongoClient;
const Place = require("./place.model");
const Tag = require("./tag.model");
const mongoose = require('mongoose');
//
const url = "mongodb://localhost:27017/bowdo";
const connect = MongoClient.connect(url);
const connectMongoose = mongoose.connect(url);

module.exports = {
    connect,
    connectMongoose,
    Place,
    Tag
};