import * as restify from 'restify';
import 'reflect-metadata';
import { InversifyRestifyServer } from 'inversify-restify-utils';
import * as corsMiddleware from 'restify-cors-middleware';
import * as bunyan from 'bunyan';
import * as config from 'config';
//
import { createContainer } from './inversify.config';
import { IDbConnector } from './helpers/db-connector';
import { TYPES } from './inversify.identifiers';


const generalConfig = config.get<any>('general');

const container = createContainer();
const connector = container.get<IDbConnector>(TYPES.IDbConnector);

const server = new InversifyRestifyServer(container, {
    name: generalConfig.serverName,
    version: '1.0.0',
    log: createLogger()
}).setConfig((app) => {
    configure(app);
}).build();

function createLogger() {
    const pretty = require('bunyan-prettystream');

    const prettyStream = new pretty();
    prettyStream.pipe(process.stdout);

    return bunyan.createLogger({
        name: 'Bow-Do logger',
        stream: prettyStream,
        // stream: process.stdout,

        serializers: {
            req: (req) => ({
                method: req.method,
                url: req.url,
                // headers: req.headers,
            }),
            res: (req) => ({
                method: req.method,
                url: req.url,
                // headers: req.headers,
            }),
            err: bunyan.stdSerializers.err
        }
    });
}

function configure(app: restify.Server) {
    const cors = configCORS();
    app.use(cors.actual);
    app.pre(cors.preflight);
    app.use(restify.plugins.acceptParser(app.acceptable));
    app.use(restify.plugins.queryParser());
    app.use(restify.plugins.bodyParser());
    app.pre(restify.pre.sanitizePath());
    app.pre((request, response, next) => {
        request.log.info({req: request}, 'REQUEST');
        next();
    });
}

function configCORS() {
    return corsMiddleware({
        preflightMaxAge: 600, // Optional
        origins: ['*'],
        allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-access-token'],
        exposeHeaders: ['API-Token-Expiry'],
    });
}

Promise.all([connector.init('all')])
    .then(() => {
        server.listen(4300, function () {
            console.log('%s listening at %s', server.name, server.url);
        });
    });


