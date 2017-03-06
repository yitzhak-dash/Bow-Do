const express = require('express');
const geolib = require('geolib');
//
const importStores = require('./data/bowdoDb');
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
    importStores.getStores(long, lat)
        .then((stores) => {
            stores.forEach(store => setDistance(store, {lat: lat, long: long}));
            res.json({stores: stores});
        }).catch(next);
});

const setDistance = (store, coordinates) => {
    store.distance = geolib.getDistanceSimple(
        {latitude: +store.coordinates.lat, longitude: +store.coordinates.long},
        {latitude: coordinates.lat, longitude: coordinates.long})
};

module.exports = router;