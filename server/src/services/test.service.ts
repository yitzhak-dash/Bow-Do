import { injectable, inject } from "inversify";

export interface ITestService {
    saySomething(): string;
}

@injectable()
export class TestService implements ITestService {
    saySomething(): string {
        return 'something...';
    }
}

export const TYPES = {
    ITestService: Symbol('ITestService'),
};
