import { injectable } from 'inversify';

export interface IWishService {
    getWishItems(): any[];
}

@injectable()
export class WishService implements IWishService {
    count = 0;

    getWishItems(): any[] {
        return [
            {
                id: new Date().getMilliseconds(),
                name: 'one + one',
                created: new Date(),
                indexNum: this.count++,
                checked: false
            },
            {
                id: this.count + new Date().getMilliseconds(),
                name: 'two',
                created: new Date(),
                indexNum: this.count++,
                checked: false
            },
            {
                id: this.count + new Date().getMilliseconds(),
                name: 'three',
                created: new Date(),
                indexNum: this.count++,
                checked: true
            }
        ];
    }
}
