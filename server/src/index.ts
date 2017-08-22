import * as restify from 'restify';
import 'reflect-metadata';
import { InversifyRestifyServer } from 'inversify-restify-utils';
import { createContainer } from './inversify.config';
import * as corsMiddleware from 'restify-cors-middleware';
import { WishItem } from './models/wish-item.model';
import { connect } from './helpers/db-connector';


const container = createContainer();
const server = new InversifyRestifyServer(container, {
    name: 'Bow-Do REST API',
    version: '1.0.0'
}).setConfig((app) => {
    config(app);
}).build();

function config(app: restify.Server) {
    const cors = configCORS();
    app.use(cors.actual);
    app.pre(cors.preflight);
    app.use(restify.plugins.acceptParser(app.acceptable));
    app.use(restify.plugins.queryParser());
    app.use(restify.plugins.bodyParser());
    app.pre(restify.pre.sanitizePath());
}

function configCORS() {
    return corsMiddleware({
        preflightMaxAge: 600, // Optional
        origins: ['*'],
        allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-access-token'],
        exposeHeaders: ['API-Token-Expiry'],
    });
}

//
// connect([]).then(connection => {
//     console.log('connected');
//     connection.close();
// }).catch(err => console.log('error:', err));

server.listen(4300, function () {
    console.log('%s listening at %s', server.name, server.url);
});
