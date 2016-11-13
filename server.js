var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));

// ======
// Routes
// ======
app.get('/', getHomePage);

app.get('/coordinates', getShopsByCoords);


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

// ====================
// Function definitions
// ====================
function getHomePage(req, res) {
  res.sendFile(path.join(__dirname, '/client', 'public', '/index.html'));
}

/***
 * Receives user's coordinates,
 * Checks if the user isn't far from a stores and then returns list of the stores with items.
 * @param req
 * @param res
 */
function getShopsByCoords(req, res) {
    // req.query  -> for /path?userId=bla&long=blu
    // req.params -> for /path/:userId/:long/
    // req.body   -> for body
    // var userId = req.query.userId;
    // var long = req.query.long;
    // var lat = req.query.lat;
    // var dateTime = req.query.date_time;

    //*** data shape ****
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
    //res.send(req.query);
}