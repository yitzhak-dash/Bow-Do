import { injectable } from 'inversify';

export interface ITestService {
    saySomething(): string;

    getWishItems(): any[];
}

@injectable()
export class TestService implements ITestService {
    count: number;

    getWishItems(): any[] {
        return [
            {
                id: new Date().getMilliseconds(),
                name: 'one',
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

    saySomething(): string {
        return 'something...';
    }
}
