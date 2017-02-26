const express = require('express');
const router = express.Router();


/***
 * Receives user's coordinates,
 * Checks if the user isn't far from a stores and then returns list of the stores with items.
 * @param req
 * @param res
 */
router.get("/stores/:long/:lat", (req, res) => {
    throw new Error('BIG ERROR');
    console.log(`long: ${req.params.long}, lat: ${req.params.lat}`);

    let shopA = {
        long: '32.123',
        lat: '21.2111',
        name: 'Baruch Best',
        desc: 'The best shop of the year',
        distance: 12, // meters
        items: [
            {name: 'spiders', category: 'food'},
            {name: 'super hero underwear', category: 'weapon'}
        ]
    };
    res.json({shops: [shopA]});
});

module.exports = router;