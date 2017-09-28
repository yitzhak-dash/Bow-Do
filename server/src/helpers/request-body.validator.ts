import { Request } from 'restify';
import * as Joi from 'joi';
import { ValidationResult } from 'joi';
import * as GeoJSON from 'geojson';


const DEFAULT_OPTIONS = {
    abortEarly: false,
    stripUnknown: {objects: true}
};

export function validateAddWishItems(req: Request): ValidationResult<WishItemRequest[]> {
    const items = req.body;
    const objectSchema = Joi.object({
        name: Joi.string().required(),
        indexNum: Joi.number()
    });
    const arraySchema = Joi.array().items(objectSchema).min(1).required();
    return Joi.validate<WishItemRequest[]>(items, arraySchema, DEFAULT_OPTIONS);
}

export function validateUpdateWishItems(req: Request): ValidationResult<WishItemRequest[]> {
    const items = req.body;
    const objectSchema = Joi.object({
        id: Joi.number().required(),
        completed: Joi.boolean().optional(),
        name: Joi.string().required(),
        indexNum: Joi.number()
    });
    const arraySchema = Joi.array().items(objectSchema).min(1).required();
    return Joi.validate<WishItemRequest[]>(items, arraySchema, DEFAULT_OPTIONS);
}

export function validatePinPlace(req: Request): ValidationResult<PinPlaceRequest> {
    const place = req.body;
    const objectSchema = Joi.object({
        location: Joi.required(),
        name: Joi.required(),
        description: Joi.required()
    });
    return Joi.validate<PinPlaceRequest>(place, objectSchema, DEFAULT_OPTIONS);
}

export class WishItemRequest {
    id?: number;
    completed?: boolean;
    name: string;
    indexNum: number;
}

export class PinPlaceRequest {
    location?: GeoJSON.Point;
    address?: {
        city: string;
        zip?: string;
        state?: string;
        country: string;
        lines?: string[];
    };
    placedIn?: string;
    name: string;
    description?: string;
    tags?: string[];
}
