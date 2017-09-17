import { inject, injectable } from 'inversify';
//
import { IParserFactory } from '../helpers/parser';
import { TYPES } from '../inversify.identifiers';
import { IDbConnector } from '../helpers/db-connector';

export interface IPlacesService {

}

@injectable()
export class PlacesService implements IPlacesService {
    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector,
                @inject(TYPES.IParserFactory) private parserFactory: IParserFactory) {
    }
}