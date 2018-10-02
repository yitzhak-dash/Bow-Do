import { inject, injectable } from 'inversify';
//
import { IParserFactory } from '../helpers/parser';
import { TYPES } from '../inversify.identifiers';
import { IDbConnector } from '../helpers/db-connector';
import { PinPlaceRequest } from '../helpers/request-body.validator';
import { EsPlace, Place } from '../models/place.model';
import { IWishService } from './wish.service';
import { IElasticsearchService } from '../db/elasticsearch.service';
import * as esQueries from '../db/elasticsearch.queries';

export interface IPlacesService {
    addPlace(request: PinPlaceRequest): Promise<any>;

    getPlaces(location: GeoJSON.Point, radius: number): Promise<Place[]>
}

@injectable()
export class PlacesService implements IPlacesService {
    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector,
                @inject(TYPES.IParserFactory) private parserFactory: IParserFactory,
                @inject(TYPES.IWishService) private wishService: IWishService,
                @inject(TYPES.IElasticsearchService) private esService: IElasticsearchService) {
    }

    // todo: check if location exists.
    async addPlace(request: PinPlaceRequest): Promise<any> {

        // TODO: change to ES

        // try {
        //     const connection = this.dbConnector.getConnection();
        //     const repo = connection.getRepository(Place);
        //     const place = this.parserFactory.getParserFor(PinPlaceRequest)
        //         .parse(request)
        //         .to<Place>();
        //     return await repo.save(place);
        // } catch (err) {
        //     console.log(err);
        //     throw err;
        // }

        throw new Error('not implemented yet');
    }

    async getPlaces(location: GeoJSON.Point, radius: number): Promise<Place[]> {
        const queryResult = await this.esService.runQuery<EsPlace>(esQueries.getPlacesByLocation(location, radius));

        return queryResult.hits.hits.map(hit => {
            const esPlace = hit._source;
            return {
                id: esPlace.id,
                address: esPlace.location.address,
                name: esPlace.name,
                placeLocation: {lat: esPlace.location.coordinates.lat, long: esPlace.location.coordinates.lon},
                tags: esPlace.categories,
                distance: hit.sort[1]

            } as Place;
        });
    }

    filterPlaces(places: Place[]) {
    }
}
