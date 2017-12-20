import { Controller, interfaces, Post } from 'inversify-restify-utils';
import { inject, injectable } from 'inversify';
import { Next, Response, Request } from 'restify';
//
import { validatePinPlace } from '../helpers/request-body.validator';
import { status_400 } from './wish-list.controller';
import { TYPES } from '../inversify.identifiers';
import { IPlacesService } from '../services/places.service';


@Controller('/api')
@injectable()
export class PlacesController implements interfaces.Controller {

    constructor(@inject(TYPES.IPlaceService) private service: IPlacesService) {
    }

    /**
     * @api {post} /places pin new place
     * @apiName pin place
     * @apiGroup Places
     *
     * @apiContentType application/json
     *
     * @apiParam {String} name Place.
     * @apiParam {String} description Place.
     * @apiParam {Object} location Place.
     *
     */
    @Post('/places')
    async addPlace(req: Request, res: Response, next: Next) {
        const validationResult = validatePinPlace(req);
        if (validationResult.error) {
            status_400(res, next, validationResult);
            return;
        }
        const result = await this.service.addPlace(validationResult.value);

        res.send(200, {
            model: result
        });
    }
}
