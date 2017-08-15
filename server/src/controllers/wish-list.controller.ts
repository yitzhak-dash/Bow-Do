import * as restify from 'restify';
import { Controller, Get, interfaces } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';
import { ITestService, TYPES } from '../services/test.service';

@Controller('/api')
@injectable()
export class WishListController implements interfaces.Controller {

    constructor(@inject(TYPES.ITestService) private service: ITestService) {
    }

    @Get('/wish')
    getWishes(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.send(200, {
            message: this.service.saySomething()
        });
        next();
    }

    @Get('/wish/:id')
    getWishById(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.send(200, {
            message: this.service.saySomething() + ' ' + req.params['id']
        });
        next();
    }
}

