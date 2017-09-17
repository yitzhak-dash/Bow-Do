import { Controller, interfaces, Post } from 'inversify-restify-utils';
import { injectable } from 'inversify';
import { Next, Response, Request } from 'restify';
import { validatePinPlace } from '../helpers/request-body.validator';
import { status_400 } from './wish-list.controller';


@Controller('/api')
@injectable()
export class PlacesController implements interfaces.Controller {

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
     * @apiSuccess {String} ???.
     */
    @Post('/places')
    addPlace(req: Request, res: Response, next: Next) {
        const validationResult = validatePinPlace(req);
        if (validationResult.error) {
            status_400(res, next, validationResult);
            return;
        }
        res.send(200, {
            model: []
        });
    }
}