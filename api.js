const express = require('express');
//
const importStores = require('./data/bowdoDb');
//
const router = express.Router();

/***
 * Receives user's coordinates,
 * Checks if the user isn't far from a stores and then returns list of the stores with items.
 * @param req
 * @param res
 * TODO: calculate destination
 */
router.get("/stores/:long/:lat", (req, res, next) => {
    importStores.getStores(req.params.long, req.params.lat)
        .then((stores) => {
            res.json({stores: stores});
        }).catch(next);
});

module.exports = router;