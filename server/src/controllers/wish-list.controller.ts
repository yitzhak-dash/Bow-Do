import * as restify from 'restify';
import { Controller, Delete, Get, interfaces, Post } from 'inversify-restify-utils';
import { injectable, inject } from 'inversify';
import { ValidationResult } from 'joi';
//
import { IWishService } from '../services/wish.service';
import { TYPES } from '../inversify.identifiers';
import { WishItem } from '../models/wish-item.model';
import { WishItemRequest, validateAddWishItems } from '../helpers/request-body.validator';

@Controller('/api')
@injectable()
export class WishListController implements interfaces.Controller {

    constructor(@inject(TYPES.IWishService) private service: IWishService) {
    }

    @Post('/wish/delete')
    async deleteWishes(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {
            await this.service.deleteWishes(req.body);
            console.log('finish deleting');
            res.send(200, {
                error: null,
                succeeded: true,
                model: req.body
            });
        } catch (err) {
            console.log('deleting failed', err.message);
            next(err);
        }
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
        const validationResult = validateAddWishItems(req);
        if (validationResult.error) {
            status_400(res, next, validationResult);
            return;
        }
        try {
            const dbRes = await this.service.addWishItems(validationResult.value);
            res.send(200, {
                error: null,
                succeeded: true,
                model: dbRes
            });
            next();
        } catch (err) {
            next(err);
        }
    }
}

export function status_400<T>(res: restify.Response, next: restify.Next, validationResult: ValidationResult<T>) {
    res.send(400, {
        message: validationResult.error.message,
        errors: validationResult.error.details.map(error => error.type)
    });
    next(new Error(validationResult.error.message));
}
