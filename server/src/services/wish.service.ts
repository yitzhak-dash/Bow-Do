import { inject, injectable } from 'inversify';
//
import { WishItem } from '../models/wish-item.model';
import { Connection } from 'typeorm';
import { IDbConnector } from '../helpers/db-connector';
import { TYPES } from '../inversify.identifiers';

export interface IWishService {
    getWishItems(): Promise<WishItem[]>;

    addWishItems(items: WishItem[]): Promise<any>;

    deleteWishes(items: WishItem[]): Promise<any> ;
}


@injectable()
export class WishService implements IWishService {

    deleteWishes(items: WishItem[]): Promise<any> {
        throw new Error('Method not implemented.');
    }

    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector) {
    }

    async addWishItems(items: WishItem[]): Promise<any> {
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
