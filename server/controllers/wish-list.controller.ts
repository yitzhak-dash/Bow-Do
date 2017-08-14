import * as restify from 'restify';

export function get(req: restify.Request, res: restify.Response, next: restify.Next) {
    res.send(200, 'hello');
    next();
}