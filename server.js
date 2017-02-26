const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
//
const apiRouter = require('./api');
//
const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
// add middlewares
app.use(morgan('combined', {stream: accessLogStream}))
    .use(express.static(path.join(__dirname, 'ng-app')))
    .use(express.static(path.join(__dirname, 'ng-app/src')))
    .use("/api", apiRouter)
    .use(bodyParser.json());
// custom error handler
// .use((err, req, res, next) => {
//     res.send('ERROR was HERE');
// })


//
// app.get('/', (req, res) => {
//     throw new Error('BIG ERROR');
//     res.render(path.join(__dirname, '/ng-app', '/src', '/index.html'));
// });

app.listen(process.env.PORT || 3000, function () {
    console.log('Bow-Do app is listening on port 3000!');
});
