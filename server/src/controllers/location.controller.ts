import { Controller, interfaces, Post } from 'inversify-restify-utils';
import { inject, injectable } from 'inversify';
import * as restify from 'restify';
//
import { TYPES } from '../inversify.identifiers';
import { IPlacesService } from '../services/places.service';

@Controller('/api')
@injectable()
export class LocationController implements interfaces.Controller {

    constructor(@inject(TYPES.IPlaceService) private service: IPlacesService) {
    }

    @Post('/location')
    async updateUserLocation(req: restify.Request, res: restify.Response, next: restify.Next) {
        /**
         * 1. Validate request
         * 2. Search relevant places in radius of 100 meters.
         * 3. Response shape:
         * {
         *  model:  {
         *      places:[
         *          {
         *              name: 'some store',
         *              distance: 65,
         *              relevant_wishes:['item_1'],
         *              location: [33.21384, 23.1231221321]
         *          }]
         *  }
         * }
         * The results places should be sorted by distance
         */
        const currentLocation = req.body;
        const result = await this.service.getPlaces(currentLocation.location, 5000);
        res.send(200, {
            model: result
        });
    }
}