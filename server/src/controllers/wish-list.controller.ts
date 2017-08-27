import * as restify from 'restify';
import { Controller, Get, interfaces, Post } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';
//
import { IWishService } from '../services/wish.service';
import { TYPES } from '../inversify.identifiers';
import { WishItem } from '../models/wish-item.model';

@Controller('/api')
@injectable()
export class WishListController implements interfaces.Controller {

    constructor(@inject(TYPES.IWishService) private service: IWishService) {
    }

    @Get('/wish')
    async getWishes(req: restify.Request, res: restify.Response, next: restify.Next) {
        let result: WishItem[];
        try {
            result = await this.service.getWishItems();
            res.send(200, result);
            next();
        } catch (err) {
            next(err);
        }
    }

    @Get('/wish/:id')
    getWishById(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.send(200, {
            message: ' ' + req.params['id']
        });
        next();
    }

    @Post('/wish')
    async addWishItems(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {
            const dbRes = await this.service.addWishItems(req.body);
            req.log.info(dbRes);
            res.send(200, {
                error: null,
                succeeded: true,
                model: dbRes
            });
            next();
        } catch (err) {
            console.log(err.message);
            next(err);
        }
    }
}

