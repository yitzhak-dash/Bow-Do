import 'reflect-metadata';
import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-restify-utils';
//
import { WishListController } from './controllers/wish-list.controller';
import { TYPES } from './inversify.identifiers';
import { IWishService, WishService } from './services/wish.service';
import { DbConnector, IDbConnector } from './helpers/db-connector';
import { IParserFactory, ParserFactory } from './helpers/parser';
import { PlacesController } from './controllers/places.constroller';

export function createContainer(): Container {
    const container = new Container();
    // services
    container.bind<IWishService>(TYPES.IWishService).to(WishService);
    container.bind<IParserFactory>(TYPES.IParserFactory).to(ParserFactory).inSingletonScope();
    container.bind<IDbConnector>(TYPES.IDbConnector).to(DbConnector).inSingletonScope();
    // controllers
    container.bind<interfaces.Controller>(TYPE.Controller).to(WishListController).whenTargetNamed('WishListController');
    container.bind<interfaces.Controller>(TYPE.Controller).to(PlacesController).whenTargetNamed('PlacesController');
    return container;
}
