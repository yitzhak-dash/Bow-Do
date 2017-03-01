const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/bowdo";

// MongoClient.connect(url, (error, db) => {
//     db.collection("stores").find().toArray((error, stores) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log(stores);
//         db.close();
//     });
// });

const connect = () => MongoClient.connect(url);

const getStores = (long, lat) => {
    return connect()
        .then((db) => db.collection("stores").find().toArray())
        .catch((error) => Promise.reject(error));
};

module.exports = {
    getStores,
    close: (callback) => {
        connect().then(db => {
            db.close();
            callback();
        })
    }
};