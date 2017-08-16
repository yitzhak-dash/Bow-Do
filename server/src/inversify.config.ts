import 'reflect-metadata';
import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-restify-utils';
//
import { WishListController } from './controllers/wish-list.controller';
import { ITestService, TestService } from './services/test.service';
import { TYPES } from './inversify.identifiers';

export function createContainer(): Container {
    const container = new Container();
    // services
    container.bind<ITestService>(TYPES.ITestService).to(TestService);
    // controllers
    container.bind<interfaces.Controller>(TYPE.Controller).to(WishListController).whenTargetNamed('WishListController');
    return container;
}
