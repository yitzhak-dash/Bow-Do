import { inject, injectable } from 'inversify';
//
import { IParserFactory } from '../helpers/parser';
import { TYPES } from '../inversify.identifiers';
import { IDbConnector } from '../helpers/db-connector';
import { PinPlaceRequest } from '../helpers/request-body.validator';
import { Place } from '../models/place.model';

export interface IPlacesService {
    addPlace(request: PinPlaceRequest): Promise<any>;
}

@injectable()
export class PlacesService implements IPlacesService {
    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector,
                @inject(TYPES.IParserFactory) private parserFactory: IParserFactory) {
    }

    // todo: check if location exists.
    // todo: insert tags
    async addPlace(request: PinPlaceRequest): Promise<any> {
        try {
            const connection = this.dbConnector.getConnection();
            const repo = connection.getRepository(Place);
            const place = this.parserFactory.getParserFor(PinPlaceRequest)
                .parse(request)
                .to<Place>();
            return await repo.save(place);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
