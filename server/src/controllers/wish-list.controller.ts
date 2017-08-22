import * as restify from 'restify';
import { Controller, Get, interfaces, Post } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';
//
import { IWishService } from '../services/wish.service';
import { TYPES } from '../inversify.identifiers';

@Controller('/api')
@injectable()
export class WishListController implements interfaces.Controller {

    constructor(@inject(TYPES.IWishService) private service: IWishService) {
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
            message: ' ' + req.params['id']
        });
        next();
    }

    @Post('/wish')
    addWishItems(req: restify.Request, res: restify.Response, next: restify.Next) {
        this.service.addWishItems(req.body)
            .then(res.send(200, {
                error: null,
                succeeded: true,
                model: req.body
            }))
            .catch(err => next(err));
        next();
    }
}

