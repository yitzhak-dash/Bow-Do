const express = require('express');
const geolib = require('geolib');
//
const db = require('./data/bowdoDb');
//
const router = express.Router();

/***
 * Receives user's coordinates,
 * Checks if the user isn't far from a stores and then returns list of the stores with items.
 * @param req
 * @param res
 */
router.get("/stores/:lat/:long", (req, res, next) => {
    const long = +req.params.long;
    const lat = +req.params.lat;
    db.getStores(long, lat)
        .then((stores) => {
            stores.forEach(store => setDistance(store, {lat: lat, long: long}));
            res.json({stores: stores});
        }).catch(next);
});

router.post("/place", (req, res, next) => {
    let place = new db.Place(req.body);
    place.inserted = new Date();
    place.save()
        .then(() => res.json(200))
        .catch((err) => console.log(err));
});

router.post("/tag", (req, res, next) => {
    console.log('[*] ' + JSON.stringify(req.body));
    let tag = new db.Tag(req.body);
    tag.save()
        .then(() => res.json(200))
        .catch((err) => {
            next(err);
            console.log(err);
        });
});

const placeFromRequestBody = (place, request) => {
    place.name = request.body.name;
};

const setDistance = (store, coordinates) => {
    store.distance = geolib.getDistanceSimple(
        {latitude: +store.coordinates.lat, longitude: +store.coordinates.long},
        {latitude: coordinates.lat, longitude: coordinates.long})
};

module.exports = router;