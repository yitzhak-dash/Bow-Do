import * as contr from './controllers/wish-list.controller';

export function setRoutes(server) {
    //ECHO route - respond with whatever was passed in the path
    server.get('/wish', contr.get);
    console.log('set routes...');
}