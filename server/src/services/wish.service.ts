import { inject, injectable } from 'inversify';
//
import { WishItem } from '../models/wish-item.model';
import { Connection } from 'typeorm';
import { IDbConnector } from '../helpers/db-connector';
import { TYPES } from '../inversify.identifiers';
import { IParserFactory, ParserFactory } from '../helpers/parser';
import { WishItemRequest } from '../helpers/request-body.validator';

export interface IWishService {
    getWishItems(): Promise<WishItem[]>;

    addWishItems(items: WishItemRequest[]): Promise<any>;

    deleteWishes(items: WishItemRequest[]): Promise<any> ;
}


@injectable()
export class WishService implements IWishService {

    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector,
                @inject(TYPES.IParserFactory) private parserFactory: IParserFactory) {
    }

    async deleteWishes(items: WishItemRequest[]): Promise<any> {
        const connection = this.dbConnector.getConnection();
        const repo = connection.getRepository(WishItem);
        try {
            await repo.removeByIds(items.map(i => i.id));
            return items;
        } catch (err) {
            throw err;
        }
    }

    async addWishItems(items: WishItemRequest[]): Promise<any> {
        try {
            const parsed =
                this.parserFactory.getParserFor(WishItemRequest)
                    .parseArr(items)
                    .to<WishItem>();

            const connection = this.dbConnector.getConnection();

            const repo = connection.getRepository(WishItem);
            return await repo.save(parsed);
        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    }

    async getWishItems(): Promise<WishItem[]> {
        return this.dbConnector.getConnection().manager.find(WishItem);
    }
}
