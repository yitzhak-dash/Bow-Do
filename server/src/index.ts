import * as restify from 'restify';
import 'reflect-metadata';
import { Container } from 'inversify';
import { ITestService, TestService, TYPES } from './services/test.service';
import { interfaces, InversifyRestifyServer, TYPE } from 'inversify-restify-utils';
import { WishListController } from './controllers/wish-list.controller';


const container = new Container();
container.bind<ITestService>(TYPES.ITestService).to(TestService);
container.bind<interfaces.Controller>(TYPE.Controller).to(WishListController).whenTargetNamed('WishListController');

let server = new InversifyRestifyServer(container, {
    name: 'Bow-Do REST API',
    version: '1.0.0'
}).build();


//parsing settings
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(restify.pre.sanitizePath());

server.listen(4300, function () {
    console.log('%s listening at %s', server.name, server.url);
});