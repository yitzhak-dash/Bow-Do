import * as restify from 'restify';
import { Controller, Get, interfaces, Post } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';
//
import { ITestService } from '../services/test.service';
import { TYPES } from '../inversify.identifiers';

@Controller('/api')
@injectable()
export class WishListController implements interfaces.Controller {

    constructor(@inject(TYPES.ITestService) private service: ITestService) {
    }

    @Get('/wish')
    getWishes(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.send(200,
            this.service.getWishItems());
        next();
    }

    @Get('/wish/:id')
    getWishById(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.send(200, {
            message: this.service.saySomething() + ' ' + req.params['id']
        });
        next();
    }

    @Post('/wish')
    addWishItems(req: restify.Request, res: restify.Response, next: restify.Next) {
        console.log(req.body);
        res.send(200, {
            error: null,
            succeeded: true,
            model: req.body
        });
        next();
    }
}

