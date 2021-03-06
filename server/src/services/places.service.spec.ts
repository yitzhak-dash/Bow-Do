import 'reflect-metadata';
import { expect } from 'chai';
import * as chai from 'chai';
import { IPlacesService } from './places.service';
import { IDbConnector } from '../helpers/db-connector';
import { createContainer } from '../inversify.config';
import { TYPES } from '../inversify.identifiers';
import { Container } from 'inversify';

chai.should();

const createPoint = (lat: number, long: number): GeoJSON.Point => ({
    type: 'Point',
    coordinates: [lat, long],
});

describe('places service', () => {
    let container: Container;

    beforeEach(async () => {
        container = createContainer();
        // const dbConnector = container.get<IDbConnector>(TYPES.IDbConnector);
        // await dbConnector.init(false);
    });

    it('should ping', async () => {

    });

    it('should find places', async () => {
        const target = container.get<IPlacesService>(TYPES.IPlaceService);
        const places = await target.getPlaces(createPoint(32.085299899999995, 34.781767599999995), 5);
        const res = expect(places).not.empty;
    });
});
