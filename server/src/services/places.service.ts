import { inject, injectable } from 'inversify';
//
import { IParserFactory } from '../helpers/parser';
import { TYPES } from '../inversify.identifiers';
import { IDbConnector } from '../helpers/db-connector';
import { PinPlaceRequest } from '../helpers/request-body.validator';
import { Place } from '../models/place.model';
import { IWishService } from './wish.service';

export interface IPlacesService {
    addPlace(request: PinPlaceRequest): Promise<any>;

    getPlaces(location: GeoJSON.Point, radius: number): Promise<Place[]>
}

@injectable()
export class PlacesService implements IPlacesService {
    constructor(@inject(TYPES.IDbConnector) private dbConnector: IDbConnector,
                @inject(TYPES.IParserFactory) private parserFactory: IParserFactory,
                @inject(TYPES.IWishService) private wishService: IWishService) {
    }

    // todo: check if location exists.
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

    async getPlaces(location: GeoJSON.Point, radius: number): Promise<Place[]> {
        const lat = location.coordinates[0];
        const long = location.coordinates[1];
        const res = await this.dbConnector.getConnection()
            .getRepository(Place)
            .createQueryBuilder('place')
            .addSelect(`st_distance(geometry(place.location),ST_MakePoint(${lat},${long})::geography)`, 'distance')
            .where(`ST_DWithin(geometry(place.location), ST_MakePoint(${lat},${long})::geography, ${radius})`)
            .orderBy('distance')
            .getRawAndEntities();
        // update entities
        res.entities.forEach((entity, ind) => {
            entity.distance = res.raw[ind].distance;
            entity.placeLocation = {lat: res.raw[ind].place_location.x, long: res.raw[ind].place_location.y};
        });

        return res.entities;
    }

    filterPlaces(places: Place[]) {

    }
}
