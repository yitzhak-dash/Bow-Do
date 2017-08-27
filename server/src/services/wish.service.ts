import { inject, injectable } from 'inversify';
//
import { WishItem } from '../models/wish-item.model';
import { Connection } from 'typeorm';
import { IDbConnector } from '../helpers/db-connector';
import { TYPES } from '../inversify.identifiers';
import * as Joi from 'joi';

export interface IWishService {
    getWishItems(): Promise<WishItem[]>;

    addWishItems(items: WishItem[]): Promise<any>;
}


@injectable()
export class WishService implements IWishService {

    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector) {
    }

    async addWishItems(items: WishItem[]): Promise<any> {

        const objectSchema = Joi.object({
            name: Joi.string().required(),
            indexNum: Joi.number()
        });

        const arraySchema = Joi.array().items(objectSchema).min(1).required();

        const DEFAULT_OPTIONS = {
            abortEarly: false,
            stripUnknown: {objects: true}
        };

        const valRes = Joi.validate(items, arraySchema, DEFAULT_OPTIONS);
        if (valRes.error) {
            throw new Error(valRes.error.message);
        }

        try {
            const connection = this.dbConnector.getConnection();
            const res = [];
            items.forEach(item => {
                const addItem = new WishItem();
                addItem.name = item.name;
                addItem.indexNum = item.indexNum;
                addItem.created = new Date();
                addItem.completed = false;
                addItem.tags = [];
                res.push(addItem);
            });


            return await connection.manager.save(res);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getWishItems(): Promise<WishItem[]> {
        return this.dbConnector.getConnection().manager.find(WishItem);
    }
}
