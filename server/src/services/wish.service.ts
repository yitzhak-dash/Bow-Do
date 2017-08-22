import { injectable } from 'inversify';
import { WishItem } from '../models/wish-item.model';
import { connect } from '../helpers/db-connector';

export interface IWishService {
    getWishItems(): WishItem[];
    addWishItems(items: WishItem[]): Promise<any>;
}


@injectable()
export class WishService implements IWishService {
    count = 0;

    addWishItems(items: WishItem[]): Promise<any> {
        return new Promise((resolve, reject) => {
            connect([WishItem])
                .then(connection => connection.manager.save(items)
                    .then(result => resolve(result)))
                .catch(error => reject(error));
        });
    }

    getWishItems(): WishItem[] {
        return [];
        // return [
        //     {
        //         id: new Date().getMilliseconds(),
        //         name: 'one + one',
        //         created: new Date(),
        //         indexNum: this.count++,
        //         checked: false,
        //         tags:[]
        //     },
        //     {
        //         id: this.count + new Date().getMilliseconds(),
        //         name: 'two',
        //         created: new Date(),
        //         indexNum: this.count++,
        //         checked: false
        //     },
        //     {
        //         id: this.count + new Date().getMilliseconds(),
        //         name: 'three',
        //         created: new Date(),
        //         indexNum: this.count++,
        //         checked: true
        //     }
        // ];
    }
}
