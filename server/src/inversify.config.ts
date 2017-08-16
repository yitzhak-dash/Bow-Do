import 'reflect-metadata';
import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-restify-utils';
//
import { WishListController } from './controllers/wish-list.controller';
import { TYPES } from './inversify.identifiers';
import { IWishService, WishService } from './services/wish.service';

export function createContainer(): Container {
    const container = new Container();
    // services
    container.bind<IWishService>(TYPES.IWishService).to(WishService);
    // controllers
    container.bind<interfaces.Controller>(TYPE.Controller).to(WishListController).whenTargetNamed('WishListController');
    return container;
}
