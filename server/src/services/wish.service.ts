import { inject, injectable } from 'inversify';
//
import { WishItem } from '../models/wish-item.model';
import { Connection } from 'typeorm';
import { IDbConnector } from '../helpers/db-connector';
import { TYPES } from '../inversify.identifiers';

export interface IWishService {
    getWishItems(): Promise<WishItem[]>;

    addWishItems(items: WishItem[]): Promise<any>;
}


@injectable()
export class WishService implements IWishService {

    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector) {
    }

    async addWishItems(items: WishItem[]): Promise<any> {
        let connection: Connection;
        try {
            connection = this.dbConnector.getConnection();
            const addItem = new WishItem();
            addItem.name = 'test';
            addItem.indexNum = 1;
            addItem.created = new Date();
            addItem.completed = false;
            addItem.tags = ['one', 'two'];

            return await connection.manager.save(addItem);
        } catch (err) {
            throw new Error(err.message);
        }
    }

   async getWishItems(): Promise<WishItem[]> {
        return this.dbConnector.getConnection().manager.find(WishItem);
    }
}
