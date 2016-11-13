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

function getShopsByCoords(req, res) {
  // req.query  -> for /path?userId=bla&lng=blu
  // req.params -> for /path/:userId/:lng/
  // req.body   -> for body
  // var userId = req.query.userId;
  // var lng = req.query.lng;
  // var lat = req.query.lat;
  // var dateTime = req.query.date_time;
  res.send(req.query);
}