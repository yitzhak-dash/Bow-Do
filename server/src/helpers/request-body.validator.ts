import { Request } from 'restify';
import * as Joi from 'joi';
import { ValidationResult } from 'joi';

const DEFAULT_OPTIONS = {
    abortEarly: false,
    stripUnknown: {objects: true}
};

export function validateAddWishItems(req: Request): ValidationResult<AddWishItemRequest[]> {
    const items = req.body;
    const objectSchema = Joi.object({
        name: Joi.string().required(),
        indexNum: Joi.number()
    });
    const arraySchema = Joi.array().items(objectSchema).min(1).required();
    return Joi.validate(items, arraySchema, DEFAULT_OPTIONS);
}

export class AddWishItemRequest {
    name: string;
    indexNum: number;
}