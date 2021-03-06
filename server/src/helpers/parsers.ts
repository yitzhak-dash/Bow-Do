import { Place } from '../models/place.model';
import { PinPlaceRequest, WishItemRequest } from './request-body.validator';
import { WishItem } from '../models/wish-item.model';
import { ParserFn } from './parser';

export const parseAddWishItemRequest: ParserFn = (obj: WishItemRequest): WishItem => {
    return {
        ...new WishItem(),
        completed: obj.completed || false,
        id: obj.id,
        indexNum: obj.indexNum,
        name: obj.name,
    };
};

export const parseAddPlaceRequest: ParserFn = (obj: PinPlaceRequest): Place => {
    return {
        ...{} as Place,
        name: obj.name,
        description: obj.description || '',
        tags: obj.tags || [],
    };
};
